import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import { withAuthentication } from '../components/hocs/withAuthentication'
import App from '../components/App'
import TrackList from '../components/TrackList'
import TopArtistsPage from '../containers/TopArtistsPage'
import RecommendedArtistsPage from '../containers/RecommendedArtistsPage'

const withRedirect = withAuthentication(() => {
  if (!sessionStorage.getItem('accessToken')) {
    browserHistory.push('/')
  }
})

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/users/:accessToken/:refreshToken"  onEnter={setAccessToken} />
      <Route path="/top-tracks" component={withRedirect(TrackList)} />
      <Route path="/top-artists" component={withRedirect(TopArtistsPage)} />
      <Route path="/recommended" component={withRedirect(RecommendedArtistsPage)} />
    </Router>
  )
}

function setAccessToken(nextState){
  sessionStorage.setItem('accessToken', nextState.params.accessToken)
  sessionStorage.setItem('refreshToken', nextState.params.accessToken)
  browserHistory.push("/top-tracks")
}
