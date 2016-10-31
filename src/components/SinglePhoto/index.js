import React from 'react';
import { Link } from 'react-router';
import './SinglePhoto.scss';

const SinglePhoto = (props) => {
  const width = props.width || '250px';
  const height = props.height || width;

  return (
    <div className="singlePhoto" style={{ width }}>
      <Link to={`/photos/${props.photo.id}`}>
        <img
          style={{ width: '100%', height }}
          className="singlePhoto__image"
          src={props.photo.link} alt={props.photo.title}
        />
      </Link>
    </div>
  );
};

SinglePhoto.propTypes = {
  photo: React.PropTypes.object.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
};

export default SinglePhoto;
