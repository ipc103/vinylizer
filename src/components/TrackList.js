import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchTopTracks } from '../actions'

class TrackList extends Component {
  componentDidMount(){
    this.props.fetchTopTracks()
  }

  render(){

    if ( !this.props.tracks.length ) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Top Tracks</h2>
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

function mapStateToProps(state){
  return {
    tracks: state.topTracks
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTopTracks: function(){
      dispatch( fetchTopTracks() )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList)
