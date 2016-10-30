import React from 'react';
import Comment from './Comment';
import './Comments.scss';

const Comments = (props) => {
  const comments = props.comments.map((comment) => {
    return (
      <Comment comment={comment} />
    );
  });

  return (
    <div className="comments">
      {comments}
    </div>
  );
};

Comments.propTypes = {
  comments: React.PropTypes.array.isRequired,
};

export default Comments;
