import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import Router from './routes'

import { fetchDiscoverWeeklyTracks } from './actions'

fetchDiscoverWeeklyTracks()()

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  < Provider store={store}>
    < Router />
  </Provider>,
  document.getElementById('root')
);
