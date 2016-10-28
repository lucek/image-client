import React from 'react';
import './SinglePhoto.scss';

const SinglePhoto = (props) => {
  return (
    <img className="singlePhoto" src={props.photo.link} alt={props.photo.title} />
  );
};

SinglePhoto.propTypes = {
  photo: React.PropTypes.object.isRequired,
};

export default SinglePhoto;
