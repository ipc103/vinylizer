import axios from 'axios'
import { getTopTracks, getTopArtists, getRecommendations, getPlaylists } from '../requests'
import { FETCH_TRACKS, FETCH_TOP_ARTISTS, UPDATE_SEEDS, FETCH_RECOMMENDED_TRACKS } from './types'

export function fetchTopTracks(){
  return dispatch => {
    getTopTracks()
      .then( res => dispatch({type: FETCH_TRACKS, payload: res.data.items }))
  }
}

export function fetchTopArtists(){
  return dispatch => {
    getTopArtists()
      .then( res => {
        dispatch({type: FETCH_TOP_ARTISTS, payload: res.data.items })
        return res.data.items
      })
      .then( artists => {
        const ids = artists.slice(0, 5).map(artist => artist.id )
        dispatch({type: UPDATE_SEEDS, payload: ids})
      })
  }
}

export function fetchRecommendedMusic(seedIds){
  return dispatch => {
    getRecommendations({artistSeeds: seedIds})
      .then( res => {
        dispatch({type: FETCH_RECOMMENDED_TRACKS, payload: res.data.tracks})
      })
  }
}

export function fetchDiscoverWeeklyTracks(){
  return dispatch => {
    getPlaylists()
      .then( res => {
        const playlist = res.data.items.find(pl => pl.name === 'Discover Weekly')
        return axios.get(playlist.tracks.href)
      })
      .then(console.log)
  }
}
