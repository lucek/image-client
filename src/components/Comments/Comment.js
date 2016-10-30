import React from 'react';
import './Comment.scss';

const Comment = (props) => {
  const comment = props.comment;
  const level = props.level;
  const width = `${95 - (props.level*5)}%`;

  return (
    <div style={{ width }} key={comment.id} className="comment">
      <div className="comment__header">
        <div className="comment__header__author">
          {comment.author}
        </div>
      </div>
      <span className="comment__content">
        {comment.comment}
      </span>
    </div>
  );
};

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired,
  level: React.PropTypes.number.isRequired,
};

export default Comment;
