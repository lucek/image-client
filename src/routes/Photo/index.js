import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import SinglePhoto from '../../components/SinglePhoto';
import Comments from '../../components/Comments';
import './Photo.scss';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
});

const Photo = (props) => {
  const currentPhoto = props.photos.find((photo) => {
    return photo.id === props.params.photoId;
  });

  let photoTitle;
  let photoDescription;

  if (currentPhoto.title) {
    photoTitle = (
      <div className="photoRoute__photo__title">
        {currentPhoto.title}
      </div>
    );
  }

  if (currentPhoto.description) {
    photoDescription = (
      <div className="photoRoute__photo__description">
        {currentPhoto.description}
      </div>
    );
  }

  return (
    <div className="photoRoute">
      <div className="photoRoute__photo">
        <div className="photoRoute__photo__information">
          {photoTitle}
          <div className="photoRoute__photo__date">
            {moment.unix(currentPhoto.datetime).format('DD/MM/YYYY - hh:mm')}
          </div>
        </div>
        <SinglePhoto photo={currentPhoto} width="100%" height="auto" />
        {photoDescription}
      </div>
      <div className="photoRoute__comments">
        <Comments photo={currentPhoto} />
      </div>
    </div>
  );
};

Photo.PropTypes = {
  photos: React.PropTypes.array,
};

export default connect(StoreState)(Photo);
