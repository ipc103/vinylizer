import {FETCH_TOP_ARTISTS} from '../actions/types'

export default (state=[], action) => {
  switch (action.type) {
    case FETCH_TOP_ARTISTS:
      return action.payload
    default:
      return state
  }
}
