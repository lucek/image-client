import React from 'react'
import rest from 'rest';
import { connect } from 'react-redux';
import PhotoGrid from '../../components/PhotoGrid';
import imgurConfig from '../../../config/imgur.config';

const StoreState = (state) => ({
  tags: state.tagsReducer.tags,
});

const Tag = React.createClass({
  getInitialState() {
    return ({
      photos: [],
    });
  },

  render() {
    const tag = this.props.tags.find((tag) => {
      return tag.id === parseInt(this.props.params.tagId);
    });

    if (tag) {
      const url = `${imgurConfig.endpoints.tagPhotos}${tag.id}/viral/1`;

      rest({ path: url, headers: {Authorization: `Client-Id ${imgurConfig.clientId}`} }).then((response) => {
        const apiResponse = JSON.parse(response.entity);
        const photos = apiResponse.data.filter((photo) => {
          return photo.type === 'image/jpeg';
        });

        this.setState({
          photos,
        })
      });
    }

    return (
      <div>
        <PhotoGrid photos={this.state.photos} />
      </div>
    );
  }
});

export default connect(StoreState)(Tag);
