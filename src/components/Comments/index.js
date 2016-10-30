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
    this.setState({
      commentsLoaded: true,
      comments: JSON.parse(response.entity).data.filter((comment) => {
        return comment.deleted === false;
      }),
    });
  },

  render() {
    let comments = (<LoadingWidget />);

    if (this.state.comments && this.state.commentsLoaded) {
      comments = this.state.comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment} />
        );
      });
    }

    return (
      <div className="comments">
        {comments}
      </div>
    );
  },
});

export default Comments;
