import React from 'react';
import { Link } from 'react-router';

const TagList = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <Link to={`/tags/${tag.id}`} className="header__link" key={tag.id}>
        {tag.name}
      </Link>
    );
  });

  return (
    <div className="tagList">
      {tags}
    </div>
  );
};

TagList.propTypes = {
  tags: React.PropTypes.array.isRequired,
};

export default TagList;
