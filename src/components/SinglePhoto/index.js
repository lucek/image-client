import React from 'react';
import { Link } from 'react-router';
import './SinglePhoto.scss';

const SinglePhoto = (props) => {
  const width = props.width || '250px';
  const height = width;

  return (
    <Link to={`/photos/${props.photo.id}`}>
      <img
        style={{ width, height }}
        className="singlePhoto"
        src={props.photo.link} alt={props.photo.title}
      />
    </Link>
  );
};

SinglePhoto.propTypes = {
  photo: React.PropTypes.object.isRequired,
  width: React.PropTypes.string,
};

export default SinglePhoto;
