import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import {authenticate} from '../components/decorators'
import App from '../components/App'
import TrackList from '../components/TrackList'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/users/:accessToken/:refreshToken"  onEnter={setAccessToken} />
      <Route path="/top_tracks" component={authenticate(TrackList)} />
    </Router>
  )
}

function setAccessToken(nextState){
  sessionStorage.setItem('accessToken', nextState.params.accessToken)
  sessionStorage.setItem('refreshToken', nextState.params.accessToken)
  browserHistory.push("/top_tracks")
}
