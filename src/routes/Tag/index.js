import React from 'react'
import rest from 'rest';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import PhotoGrid from '../../components/PhotoGrid';
import imgurConfig from '../../../config/imgur.config';
import sampleSize from 'lodash.samplesize';
import * as Actions from '../../actions';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Tag = React.createClass({
  getInitialState() {
    return ({
      currentTagId: null,
    });
  },

  componentDidMount() {
    this._downloadPhotosForTag(this.props.params.tagId);
  },

  componentWillReceiveProps(nextProps) {
    if (parseInt(nextProps.params.tagId) !== this.state.currentTagId) {
      this.setState({
        currentTagId: parseInt(nextProps.params.tagId),
      }, () => {
        this._downloadPhotosForTag(this.state.currentTagId);
      });
    }
  },

  shouldComponentUpdate(nextProps) {
    return fromJS(nextProps.photos).toMap() !== fromJS(this.props.photos).toMap();
  },

  _downloadPhotosForTag(tagId) {
    const tag = this.props.tags.find((tag) => {
      return tag.id === parseInt(tagId);
    });

    const url = `${imgurConfig.endpoints.tagPhotos}${tag.id}/viral/1`;
    const that = this;

    rest({ path: url, headers: {Authorization: `Client-Id ${imgurConfig.clientId}`} }).then((response) => {
      const { dispatch } = that.props;
      const apiResponse = JSON.parse(response.entity);
      const photos = apiResponse.data.filter((photo) => {
        return photo.type === 'image/jpeg';
      });
      const action = Actions.setPhotos(sampleSize(photos, 20));
      dispatch(action);
    });
  },

  render() {
    return (
      <div>
        <PhotoGrid photos={this.props.photos} />
      </div>
    );
  }
});

export default connect(StoreState)(Tag);
