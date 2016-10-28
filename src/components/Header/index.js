import React from 'react';
import './Header.scss';

const Header = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <div className="header__link" key={tag.id}>
        {tag.name}
      </div>
    );
  });

  return (
    <header>
      <div className="header__limiter">
        <div className="header__heading">Imgur client</div>
        <nav className="header__navigation">
          {tags}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  tags: React.PropTypes.array.isRequired,
};

export default Header;
