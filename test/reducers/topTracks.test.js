import topTracks from '../../src/reducers/topTracks'
import { FETCH_TRACKS } from '../../src/actions/types'

describe('the top tracks reducer', () => {
  it('returns an empty array by default', () =>{
    let state = topTracks(undefined, {})
    expect(state).toEqual([])
  })

  it('can fetch a list of top tracks', () => {
    let tracks = [{id: 1, name: 'Work'}, {id: 2, name: 'Fire to the Rain'}]
    let state = topTracks([], {type: FETCH_TRACKS, payload: tracks})
    expect(state).toEqual(tracks)
  })

  it('returns the state for bogus actions', () => {
    let tracks = [{id: 1, name: 'Work'}, {id: 2, name: 'Fire to the Rain'}]
    let state = topTracks(tracks, {type: 'SOMETHING_BOGUS'})
    expect(state).toEqual(tracks)
  })

})
