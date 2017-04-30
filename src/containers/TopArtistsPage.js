import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {fetchTopArtists} from '../actions'
import ArtistList from '../components/ArtistList'

class TopArtistsPage extends Component {

  componentDidMount(){
    this.props.fetchTopArtists()
  }

  render(){
    return (
      <div>
        < ArtistList artists={this.props.artists}/>
        <Link to='/recommended'>Recommended</Link>
      </div>
    )
  }
}

const mapStateTopProps = state => {
  return {artists: state.topArtists}
}

export default connect(mapStateTopProps, {fetchTopArtists})(TopArtistsPage)
