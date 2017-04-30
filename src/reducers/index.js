import { combineReducers } from 'redux'
import topTracks from './topTracks'
import topArtists from './topArtists'
import recommendations from './recommendations'

export default combineReducers({
  topTracks,
  topArtists,
  recommendations
})
