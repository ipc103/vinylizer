import { getTopTracks } from '../requests'

export function fetchTopTracks(){
  return dispatch => {
    getTopTracks()
      .then( res => dispatch({type: 'FETCH_TRACKS', payload: res.data.items }))
  }
}
