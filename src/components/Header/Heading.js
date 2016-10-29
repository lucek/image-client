import React from 'react';
import { Link } from 'react-router';
import './Heading.scss';

const Heading = () => {
  return (
    <div className="heading">
      <Link to="/" className="heading__link">
        Imgur client
      </Link>
    </div>
  );
};

export default Heading;
