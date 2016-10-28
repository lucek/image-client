import React from 'react';
import { Link } from 'react-router';
import './Header.scss';

const Header = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <Link to={`/tags/${tag.id}`} className="header__link" key={tag.id}>
        {tag.name}
      </Link>
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
