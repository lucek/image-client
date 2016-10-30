import React from 'react';

const Comment = (props) => {
  const comment = props.comment;

  return (
    <div key={comment.id} className="comment">
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
};

export default Comment;
