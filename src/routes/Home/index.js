import React from 'react'
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

const Home = (props) => {
  rest(imgurConfig.endpoints.photos).then((response) => {
    const { dispatch } = props;
    const apiResponse = JSON.parse(response.entity);
    const photos = apiResponse.data.filter((photo) => {
      return photo.type === 'image/jpeg';
    });
    const action = Actions.setPhotos(sampleSize(photos, 20));

    dispatch(action);
  });

  return (
    <PhotoGrid photos={props.photos} />
  );
};

export default connect(StoreState)(Home);
