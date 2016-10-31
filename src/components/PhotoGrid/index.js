import React from 'react';
import { connect } from 'react-redux';
import RestWrapper from '../../data/RestWrapper';
import SinglePhoto from '../SinglePhoto';
import sampleSize from 'lodash.samplesize';
import imgurConfig from '../../../config/imgur.config';
import * as Actions from '../../actions';
import LoadingWidget from '../../widgets/LoadingWidget';
import './PhotoGrid.scss';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
});

const PhotoGrid = React.createClass({
  propTypes: {
    photos: React.PropTypes.photos.isRequired,
    url: React.PropTypes.string.isRequired,
  },

  statics: {
    photosCount: 20,
  },

  getInitialState() {
    return ({
      photosLoaded: false,
    });
  },

  componentDidMount() {
    this.restWrapper = new RestWrapper();

    if (this.props.url !== '') {
      this._downloadPhotos();
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this._downloadPhotos();
    }
  },

  _downloadPhotos() {
    this.setState({
      photosLoaded: false,
    }, () => {
      this.restWrapper.get(this.props.url, this._checkPhotosLength);
    });
  },

  _checkPhotosLength(response) {
    const apiResponse = JSON.parse(response.entity);
    const photos = apiResponse.data.filter((photo) => {
      return photo.is_album === false;
    });

    if (photos.length < PhotoGrid.photosCount) {
      const missingCount = PhotoGrid.photosCount - photos.length;
      const albums = apiResponse.data.filter((photo) => {
        return photo.is_album === true;
      });

      sampleSize(albums, missingCount).forEach((album) => {
        const albumCover = album.cover;
        const photoIds = photos.map((photo) => {
          return photo.id;
        });

        if (photoIds.indexOf(albumCover) === -1) {
          this.restWrapper.get(`${imgurConfig.endpoints.photo}${album.cover}`, (_response) => {
            photos.push(JSON.parse(_response.entity).data);
            if (photos.length === PhotoGrid.photosCount) {
              this._setPhotos(photos);
            }
          });
        }
      });
    } else {
      this._setPhotos(photos);
    }
  },

  _setPhotos(photos) {
    const { dispatch } = this.props;
    const action = Actions.setPhotos(sampleSize(photos, PhotoGrid.photosCount));

    this.setState({
      photosLoaded: true,
    }, () => {
      dispatch(action);
    });
  },

  render() {
    let photos = <LoadingWidget />;

    if (this.state.photosLoaded) {
      photos = this.props.photos.map((photo) => {
        return (
          <SinglePhoto key={photo.id} photo={photo} width="250px" />
        );
      });
    }

    return (
      <div className="photoGrid">
        {photos}
      </div>
    );
  },
});

export default connect(StoreState)(PhotoGrid);
