import { combineReducers } from 'redux'
import topTracks from './topTracks'
import topArtists from './topArtists'

export default combineReducers({
  topTracks,
  topArtists
})
