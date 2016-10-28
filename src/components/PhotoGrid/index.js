import React from 'react';
import SinglePhoto from '../SinglePhoto';
import './PhotoGrid.scss';

const PhotoGrid = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <SinglePhoto key={photo.id} photo={photo} />
    );
  });

  return (
    <div className="photoGrid">{photos}</div>
  );
};

PhotoGrid.propTypes = {
  photos: React.PropTypes.array.isRequired,
};

export default PhotoGrid;
