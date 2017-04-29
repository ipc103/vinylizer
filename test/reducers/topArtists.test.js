import topArtists from '../../src/reducers/topArtists'
import { FETCH_TOP_ARTISTS } from '../../src/actions/types'

describe('the top artists reducer', () => {
  it('returns an empty array by default', () =>{
    let state = topArtists(undefined, {})
    expect(state).toEqual([])
  })

  it('can fetch a list of top artists', () => {
    let artists = [{id: 1, name: 'Rihanna'}, {id: 2, name: 'Adele'}]
    let state = topArtists([], {type: FETCH_TOP_ARTISTS, payload: artists})
    expect(state).toEqual(artists)
  })

  it('returns the state for bogus actions', () => {
    let artists = [{id: 1, name: 'Rihanna'}, {id: 2, name: 'Adele'}]
    let state = topArtists(artists, {type: 'SOMETHING_BOGUS'})
    expect(state).toEqual(artists)
  })

})
