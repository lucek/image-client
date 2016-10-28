import React from 'react';
import SinglePhoto from '../SinglePhoto';

const PhotoGrid = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <SinglePhoto photo={photo} />
    );
  });

  return (
    <div>{photos}</div>
  );
};

PhotoGrid.propTypes = {
  photos: React.PropTypes.array.isRequired,
};

export default PhotoGrid;
