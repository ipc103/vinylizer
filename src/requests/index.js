import axios from 'axios'

const BASE_URL =  'https://api.spotify.com/v1'

export function getTopTracks(){
  setAccessToken()
  return axios.get(`${BASE_URL}/me/top/tracks`)
}

export function getTopArtists(){
  setAccessToken()
  return axios.get(`${BASE_URL}/me/top/artists`)
}

export function getRecommendations(opts){
  setAccessToken()
  const {artistSeeds} = opts
  const url = `${BASE_URL}/recommendations/?seed_artists=${artistSeeds.join(',')}&limit=100`
  return axios.get(url)
}

export function getPlaylists(){
  setAccessToken()
  return axios.get(`${BASE_URL}/me/playlists`)
}

function setAccessToken(){
  const accessToken = sessionStorage.getItem('accessToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
