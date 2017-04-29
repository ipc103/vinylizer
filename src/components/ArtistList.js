import React, {Component} from 'react'
import { connect } from 'react-redux'

import {fetchTopArtists} from '../actions'

class ArtistList extends Component {

  componentDidMount(){
    this.props.fetchTopArtists()
  }

  render(){
    const {artists} = this.props

    if (!artists || !artists.length ) {
      return <div>Loading</div>
    }

    return (
      <div>
        <h2>Artist List</h2>
        <ul>
          {artists.map((artist, i) => <li key={i}>{artist.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateTopProps = state => ( {artists: state.topArtists} )

export default connect(mapStateTopProps, {fetchTopArtists})(ArtistList)
