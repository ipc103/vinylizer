import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import App from '../components/App'
import TopTracks from '../components/TopTracks'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/users/:accessToken/:refreshToken" component={TopTracks} />
    </Router>
  )
}
