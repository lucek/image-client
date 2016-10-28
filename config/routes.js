import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import photosReducer from '../src/reducers/photosReducer';
import tagsReducer from '../src/reducers/tagsReducer';
import App from '../src/components/App';
import Photos from '../src/components/Photos';
import Photo from '../src/components/Photo';

const reducer = combineReducers({
  photosReducer,
  tagsReducer,
  routing: routerReducer,
});

const store = createStore(
  reducer,
);

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Photos} />
          <Route path="/photo" component={Photo} />
        </Route>
      </Router>
    </div>
  </Provider>
);

export default routes;
