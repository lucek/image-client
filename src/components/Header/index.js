import React from 'react';

const Header = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <div key={tag.id}>
        {tag.name}
      </div>
    );
  });

  return (
    <div>{tags}</div>
  );
};

Header.propTypes = {
  tags: React.PropTypes.array.isRequired,
};

export default Header;
