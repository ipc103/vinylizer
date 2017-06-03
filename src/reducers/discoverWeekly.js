import {FETCH_DISCOVER_WEEKLY_TRACKS} from '../actions/types'

const initialState = {
  url: null,
  tracks: [],
  loading: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOVER_WEEKLY_TRACKS:
      return Object.assign({}, state, {tracks: action.tracks, loading: false})
    default:
      return state
  }
}
