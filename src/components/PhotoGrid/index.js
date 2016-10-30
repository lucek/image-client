import React from 'react';
import { connect } from 'react-redux';
import RestWrapper from '../../data/RestWrapper';
import SinglePhoto from '../SinglePhoto';
import sampleSize from 'lodash.samplesize';
import * as Actions from '../../actions';
import LoadingWidget from '../../widgets/LoadingWidget';
import './PhotoGrid.scss';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
});

const PhotoGrid = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
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
      this.restWrapper.get(this.props.url, this._setPhotos);
    });
  },

  _setPhotos(response) {
    const { dispatch } = this.props;
    const apiResponse = JSON.parse(response.entity);
    const photos = apiResponse.data.filter((photo) => {
      return photo.type === 'image/jpeg';
    });
    const action = Actions.setPhotos(sampleSize(photos, 20));

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
