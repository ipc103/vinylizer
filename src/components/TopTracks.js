import React, { Component } from 'react'
import axios from 'axios'

export default class TopTracks extends Component {
  state = { tracks: []}

  componentDidMount(){
    const { accessToken, refreshToken } = this.props.params
    this.fetchUser(accessToken, refreshToken)
  }

  fetchUser(accessToken, refreshToken){
    const profileUrl = 'https://api.spotify.com/v1/me'
    const tracksUrl = `${profileUrl}/top/tracks`
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    axios.get(tracksUrl)
      .then(res => {
        this.setState({tracks: res.data.items})
      })
  }

  render(){
    if ( !this.state.tracks ) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Top Tracks</h2>
        <ul>{this.state.tracks.map((track, i) => (
          <li key={i}>
            <h3>{track.name}</h3>
            <h4>by {track.artists.map(artist => artist.name).join(" and ")}</h4>
          </li>
        ))}</ul>
      </div>
    )
  }
}
