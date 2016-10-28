import React from 'react';
import { Link } from 'react-router';
import './SinglePhoto.scss';

const SinglePhoto = (props) => {
  return (
    <Link to={`/photos/${props.photo.id}`}>
      <img className="singlePhoto" src={props.photo.link} alt={props.photo.title} />
    </Link>
  );
};

SinglePhoto.propTypes = {
  photo: React.PropTypes.object.isRequired,
};

export default SinglePhoto;
