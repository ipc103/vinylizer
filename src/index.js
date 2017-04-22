import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'

import App from './components/App'
import User from './components/User'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/users/:accessToken/:refreshToken" component={User} />
  </Router>,
  document.getElementById('root')
);
