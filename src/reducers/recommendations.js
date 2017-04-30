import {UPDATE_SEEDS, FETCH_RECOMMENDED_TRACKS} from '../actions/types'

const initialState = {seedIds: [], music: []}

export default (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_SEEDS:
      return Object.assign({}, state, {seedIds: action.payload})
    case FETCH_RECOMMENDED_TRACKS:
      return Object.assign({}, state, {music: action.payload})
    default:
      return state
  }
}
