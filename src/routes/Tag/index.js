import React from 'react';
import { connect } from 'react-redux';
import camelCase from 'lodash.camelcase';
import PhotoGrid from '../../components/PhotoGrid';
import imgurConfig from '../../../config/imgur.config';
import './Tag.scss';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Tag = React.createClass({
  propTypes: {
    tags: React.PropTypes.array.isRequired,
  },

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
    const currentTag = this.props.tags.find((tag) => {
      return tag.id === parseInt(this.state.currentTagId);
    });

    return (
      <div className="tagRoute">
        <div className="tagRoute__tagName">
          {`#${camelCase(currentTag.name)}`}
        </div>
        <PhotoGrid url={url} />
      </div>
    );
  },
});

export default connect(StoreState)(Tag);
