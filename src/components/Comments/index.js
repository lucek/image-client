import React from 'react';
import Comment from './Comment';
import RestWrapper from '../../data/RestWrapper';
import imgurConfig from '../../../config/imgur.config';
import './Comments.scss';

const Comments = React.createClass({
  propTypes: {
    photo: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return ({
      comments: [],
    });
  },

  componentDidMount() {
    const restWrapper = new RestWrapper();

    restWrapper.get(
      `${imgurConfig.endpoints.photo}${this.props.photo.id}/comments`,
      this._setComments
    );
  },

  _setComments(response) {
    this.setState({
      comments: JSON.parse(response.entity).data,
    });
  },

  render() {
    const comments = this.state.comments.map((comment) => {
      return (
        <Comment comment={comment} />
      );
    });

    return (
      <div className="comments">
        {comments}
      </div>
    );
  },
});

export default Comments;
