import React, {Component} from 'react'
import { connect } from 'react-redux'

import {fetchTopArtists, fetchRecommendedMusic} from '../actions'
import TrackList from '../components/TrackList'

class RecommendedArtistsPage extends Component {

  componentDidMount(){
    const {seedIds} = this.props.recommendations
    if (! seedIds.length) {
      this.props.fetchTopArtists()
    }
  }

  render(){
    const {seedIds, music} = this.props.recommendations
    if (seedIds.length && !music.length ) {
      this.props.fetchRecommendedMusic(seedIds)
    }

    return (
      <div>
        <h2>Recommended Tracks</h2>
        <ul>{this.props.tracks.map((track, i) => (
          <li key={i}>
            <h3>{track.name}</h3>
            <h4>by {track.artists.map(artist => artist.name).join(" and ")}</h4>
          </li>
        ))}</ul>
      </div>
    )
  }
}

const mapStateTopProps = state => {
  console.log(state)
  return {recommendations: state.recommendations, tracks: state.recommendations.music}
}

export default connect(mapStateTopProps, {fetchRecommendedMusic, fetchTopArtists})(RecommendedArtistsPage)
