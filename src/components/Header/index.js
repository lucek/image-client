import React from 'react';
import { connect } from 'react-redux';
import RestWrapper from '../../data/RestWrapper';
import sampleSize from 'lodash.samplesize';
import * as Actions from '../../actions';
import imgurConfig from '../../../config/imgur.config';
import Heading from './Heading';
import TagList from '../TagList';
import LoadingWidget from '../../widgets/LoadingWidget';
import './Header.scss';

const StoreState = (state) => ({
  photos: state.photosReducer.photos,
  tags: state.tagsReducer.tags,
});

const Header = React.createClass({
  getInitialState() {
    return ({
      tagsLoaded: false,
    });
  },

  componentDidMount() {
    this.restWrapper = new RestWrapper();
    this._downloadTags();
  },

  _downloadTags() {
    this.setState({
      tagsLoaded: false,
    }, () => {
      this.restWrapper.get(imgurConfig.endpoints.tags, this._setTags);
    });
  },

  _setTags(response) {
    const { dispatch } = this.props;
    const apiResponse = JSON.parse(response.entity);
    const tags = apiResponse.data;
    const action = Actions.setTags(sampleSize(tags, 5));

    this.setState({
      tagsLoaded: true,
    }, () => {
      dispatch(action);
    });
  },

  render() {
    let tagList = (<LoadingWidget />);

    if (this.props.tags && this.state.tagsLoaded) {
      tagList = (
        <TagList tags={this.props.tags} />
      );
    }

    return (
      <header>
        <div className="header__limiter">
          <Heading />
          <nav className="header__navigation">
            {tagList}
          </nav>
        </div>
      </header>
    );
  },
});


export default connect(StoreState)(Header);
