import React from 'react';
import rest from 'rest';
import sampleSize from 'lodash.samplesize';
import { connect } from 'react-redux';
import imgurConfig from '../../config/imgur.config';
import Header from './Header';

import * as Actions from '../actions/actions';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const App = React.createClass({
  componentDidMount() {
    this.downloadTags();
  },

  downloadTags() {
    const that = this;

    rest(imgurConfig.endpoints.tags).then((response) => {
      const { dispatch } = that.props;
      const apiResponse = JSON.parse(response.entity);
      const tags = apiResponse.data;
      const action = Actions.setTags(sampleSize(tags, 5));

      dispatch(action);
    });
  },

  render() {
    return (
      <div>
        <Header tags={this.props.tags} />
        {this.props.children}
      </div>
    );
  },
});

export default connect(StoreState)(App);
