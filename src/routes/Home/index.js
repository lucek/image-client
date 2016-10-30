import React from 'react';
import PhotoGrid from '../../components/PhotoGrid';

const Home = React.createClass({
  render() {
    return (
      <PhotoGrid photos={this.props.photos} />
    );
  },
});

export default Home;
