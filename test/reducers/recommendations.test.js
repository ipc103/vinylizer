import recommendations from '../../src/reducers/recommendations'

describe('recommendations', ()=>{
  const initialState = {seedIds: [], music: []}

  it('returns the initial state', ()=> {
    let state = recommendations(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('can update a list of seed IDs', ()=>{
    let ids = [5, 4, 7, 8, 10]
    let state = recommendations(initialState, {type: 'UPDATE_SEEDS', payload: ids})
    expect(state).toEqual({seedIds: ids, music: [] })
  })

  it('can update a list of recommended music', ()=> {
    let music = [{id: 1, name: 'Work'}, {id: 2, name: 'Fire to the Rain'}]
    let state = recommendations(initialState, {type: 'FETCH_RECOMMENDED_TRACKS', payload: music})
    expect(state).toEqual({seedIds: [], music: music})
  })
})
