import React from 'react';
import imgurConfig from '../../../config/imgur.config';
import PhotoGrid from '../../components/PhotoGrid';

const Home = () => {
  return (
    <PhotoGrid url={imgurConfig.endpoints.photos} />
  );
};

export default Home;
