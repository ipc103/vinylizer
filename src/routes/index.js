import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import App from '../components/App'
import TrackList from '../components/TrackList'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/users/:accessToken/:refreshToken" component={TrackList} onEnter={setAccessToken} />
      <Route path="/top_tracks" component={TrackList} />
    </Router>
  )
}

function setAccessToken(nextState){
  sessionStorage.setItem('accessToken', nextState.params.accessToken)
  sessionStorage.setItem('refreshToken', nextState.params.accessToken)
  browserHistory.push("/top_tracks")
}
