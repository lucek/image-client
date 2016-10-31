import React from 'react';
import Comment from './Comment';
import RestWrapper from '../../data/RestWrapper';
import LoadingWidget from '../../widgets/LoadingWidget';
import imgurConfig from '../../../config/imgur.config';
import './Comments.scss';

const Comments = React.createClass({
  propTypes: {
    photo: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return ({
      comments: [],
      commentsLoaded: false,
    });
  },

  componentDidMount() {
    this.commentsArray = [];
    this.restWrapper = new RestWrapper();
    this._downloadComments();
  },

  _downloadComments() {
    this.setState({
      commentsLoaded: false,
    }, () => {
      this.restWrapper.get(
        `${imgurConfig.endpoints.photo}${this.props.photo.id}/comments`,
        this._setComments
      );
    });
  },

  _setComments(response) {
    let comments = [];

    if (response.status.code === 200) {
      comments = JSON.parse(response.entity).data.filter((comment) => {
        return comment.deleted === false;
      });
    }

    this.setState({
      commentsLoaded: true,
      comments,
    });
  },

  _renderComments(comments, level) {
    const that = this;

    comments.map((comment) => {
      this.commentsArray.push(that._renderComment(comment, level));

      for (let i = 0; i < comment.children.length; i++) {
        const nextLevel = level + 1;
        return that._renderComments(comment.children, nextLevel);
      }
    });

    return this.commentsArray;
  },

  _renderComment(comment, level) {
    return (
      <Comment level={level} key={comment.id} comment={comment} />
    );
  },

  _renderNoComments() {
    return (
      <div className="comments__noComments">
        <i>No comments</i>
      </div>
    );
  },

  render() {
    let comments = (<LoadingWidget />);

    if (this.state.comments && this.state.commentsLoaded) {
      if (this.state.comments.length !== 0) {
        comments = this._renderComments(this.state.comments, 0);
      } else {
        comments = this._renderNoComments();
      }
    }

    return (
      <div className="comments">
        {comments}
      </div>
    );
  },
});

export default Comments;
