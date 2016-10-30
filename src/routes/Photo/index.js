import React from 'react';
import { connect } from 'react-redux';
import SinglePhoto from '../../components/SinglePhoto';
import Comments from '../../components/Comments';
import './Photo.scss';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Photo = (props) => {
  const currentPhoto = props.photos.find((photo) => {
    return photo.id === props.params.photoId;
  });

  return (
    <div className="photoRoute">
      <div className="photoRoute__photo">
        <SinglePhoto photo={currentPhoto} width="100%" height="auto" />
      </div>
      <div className="photoRoute__comments">
        <Comments photo={currentPhoto} />
      </div>
    </div>
  );
};

export default connect(StoreState)(Photo);
