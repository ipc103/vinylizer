import { getTopTracks } from '../requests'
import { FETCH_TRACKS } from './types'
export function fetchTopTracks(){
  return dispatch => {
    getTopTracks()
      .then( res => dispatch({type: FETCH_TRACKS, payload: res.data.items }))
  }
}
