import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../src/App';
import Photos from '../src/Photos';
import Photo from '../src/Photo';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Photos} />
    <Route path="/photo" component={Photo} />
  </Route>
);
