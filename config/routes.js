import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import photosReducer from '../src/reducers/photosReducer';
import tagsReducer from '../src/reducers/tagsReducer';
import App from '../src/routes/App';
import Home from '../src/routes/Home';
import Photo from '../src/routes/Photo';
import Tag from '../src/routes/Tag';

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
          <IndexRoute component={Home} />
          <Route path="/photos/:photoId" component={Photo} />
          <Route path="/tags/:tagId" component={Tag} />
        </Route>
      </Router>
    </div>
  </Provider>
);

export default routes;
