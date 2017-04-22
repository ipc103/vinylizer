import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'

import App from './components/App'
import TopTracks from './components/TopTracks'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/users/:accessToken/:refreshToken" component={TopTracks} />
  </Router>,
  document.getElementById('root')
);
