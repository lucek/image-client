import React from 'react';
import Heading from './Heading';
import TagList from '../TagList';
import './Header.scss';

const Header = (props) => {
  let tagList;

  if (props.tags) {
    tagList = (
      <nav className="header__navigation">
        <TagList tags={props.tags} />
      </nav>
    );
  }

  return (
    <header>
      <div className="header__limiter">
        <Heading />
        {tagList}
      </div>
    </header>
  );
};

Header.propTypes = {
  tags: React.PropTypes.array,
};

export default Header;
