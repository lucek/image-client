import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import imgurConfig from '../../../config/imgur.config';
import RestWrapper from '../../data/RestWrapper';
import SinglePhoto from '../../components/SinglePhoto';
import Comments from '../../components/Comments';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Photo = React.createClass({
  getInitialState() {
    const photo = this.props.photos.find((photo) => {
      return photo.id === this.props.params.photoId;
    });

    const comments = [];

    return ({
      photo,
      comments,
    });
  },

  componentDidMount() {
    const restWrapper = new RestWrapper();

    restWrapper.get(`${imgurConfig.endpoints.photo}${this.state.photo.id}/comments`, this._setComments);
  },

  _setComments(response) {
    this.setState({
      comments: JSON.parse(response.entity).data,
    });
  },

  render() {
    return (
      <div>
        <SinglePhoto photo={this.state.photo} width="500px" height="auto" />
        <Comments comments={this.state.comments} />
      </div>
    );
  },
});

export default connect(StoreState)(Photo);
