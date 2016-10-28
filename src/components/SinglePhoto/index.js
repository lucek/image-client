import React from 'react';

const SinglePhoto = (props) => {
  return (
    <img src={props.photo.link} alt={props.photo.title} />
  );
};

SinglePhoto.propTypes = {
  photo: React.PropTypes.object.isRequired,
};

export default SinglePhoto;
