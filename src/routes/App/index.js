import React from 'react';
import RestWrapper from '../../data/RestWrapper';
import sampleSize from 'lodash.samplesize';
import { connect } from 'react-redux';
import imgurConfig from '../../../config/imgur.config';
import Header from '../../components/Header';

import * as Actions from '../../actions';
import './App.scss';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const App = React.createClass({
  componentDidMount() {
    this.restWrapper = new RestWrapper();
    this._downloadTags();
  },

  _downloadTags() {
    this.restWrapper.get(imgurConfig.endpoints.tags, this._setTags);
  },

  _setTags(response) {
    const { dispatch } = this.props;
    const apiResponse = JSON.parse(response.entity);
    const tags = apiResponse.data;
    const action = Actions.setTags(sampleSize(tags, 5));

    dispatch(action);
  },

  render() {
    return (
      <div>
        <Header tags={this.props.tags} />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  },
});

export default connect(StoreState)(App);
