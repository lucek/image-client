import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import SinglePhoto from '../../components/SinglePhoto';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Photo = (props) => {
  const photo = props.photos.find((photo) => {
    return photo.id === props.params.photoId;
  });

  return (
    <div>
      <SinglePhoto photo={photo} width="500px" height="auto" />
    </div>
  );
};

export default connect(StoreState)(Photo);
