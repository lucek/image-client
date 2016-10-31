import React from 'react';
import moment from 'moment';
import './Comment.scss';

const Comment = (props) => {
  const comment = props.comment;
  const width = `${95 - (props.level * 5)}%`;

  return (
    <div style={{ width }} key={comment.id} className="comment">
      <div className="comment__header">
        <div className="comment__header__author">
          {comment.author}
        </div>
        <div className="comment__header__date">
          ({moment.unix(comment.datetime).format('DD/MM/YYYY - hh:mm')})
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
