import React from 'react';
import { connect } from 'react-redux';
import rest from 'rest';
import imgurConfig from '../../../config/imgur.config';
import sampleSize from 'lodash.samplesize';
import PhotoGrid from '../../components/PhotoGrid';
import * as Actions from '../../actions';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Home = React.createClass({
  componentDidMount() {
    this.downloadPhotos();
  },

  downloadPhotos() {
    const that = this;

    rest(imgurConfig.endpoints.photos).then((response) => {
      const { dispatch } = that.props;
      const apiResponse = JSON.parse(response.entity);
      const photos = apiResponse.data.filter((photo) => {
        return photo.type === 'image/jpeg';
      });
      const action = Actions.setPhotos(sampleSize(photos, 20));

      dispatch(action);
    });
  },

  render() {
    return (
      <PhotoGrid photos={this.props.photos} />
    );
  },
});

export default connect(StoreState)(Home);
