import { getTopTracks, getTopArtists } from '../requests'
import { FETCH_TRACKS, FETCH_TOP_ARTISTS } from './types'

export function fetchTopTracks(){
  return dispatch => {
    getTopTracks()
      .then( res => dispatch({type: FETCH_TRACKS, payload: res.data.items }))
  }
}

export function fetchTopArtists(){
  return dispatch => {
    getTopArtists()
      .then( res => dispatch({type: FETCH_TOP_ARTISTS, payload: res.data.items }))
  }
}
