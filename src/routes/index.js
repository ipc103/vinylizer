import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import {authenticate} from '../components/decorators'
import App from '../components/App'
import TrackList from '../components/TrackList'
import TopArtistsPage from '../containers/TopArtistsPage'
import RecommendedArtistsPage from '../containers/RecommendedArtistsPage'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/users/:accessToken/:refreshToken"  onEnter={setAccessToken} />
      <Route path="/top-tracks" component={authenticate(TrackList)} />
      <Route path="/top-artists" component={authenticate(TopArtistsPage)} />
      <Route path="/recommended" component={authenticate(RecommendedArtistsPage)} />
    </Router>
  )
}

function setAccessToken(nextState){
  sessionStorage.setItem('accessToken', nextState.params.accessToken)
  sessionStorage.setItem('refreshToken', nextState.params.accessToken)
  browserHistory.push("/top-tracks")
}
