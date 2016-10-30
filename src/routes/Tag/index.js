import React from 'react';
import { connect } from 'react-redux';
import PhotoGrid from '../../components/PhotoGrid';
import imgurConfig from '../../../config/imgur.config';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Tag = React.createClass({
  getInitialState() {
    return ({
      currentTagId: this.props.params.tagId,
    });
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.tagId !== this.state.currentTagId) {
      this.setState({
        currentTagId: nextProps.params.tagId,
      });
    }
  },

  render() {
    const url = `${imgurConfig.endpoints.tagPhotos}${this.state.currentTagId}/viral/1`;

    return (
      <div>
        <PhotoGrid url={url} />
      </div>
    );
  },
});

export default connect(StoreState)(Tag);
