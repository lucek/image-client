import React from 'react';
import { Link } from 'react-router';
import camelCase from 'lodash.camelcase';
import './TagList.scss';

const TagList = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <Link to={`/tags/${tag.id}`} className="tagList__link" key={tag.id}>
        {`#${camelCase(tag.name)}`}
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
