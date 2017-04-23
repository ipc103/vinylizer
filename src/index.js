import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import Router from './routes'

const store = createStore(rootReducer)

ReactDOM.render(
  < Provider store={store}>
    < Router />
  </Provider>,
  document.getElementById('root')
);
