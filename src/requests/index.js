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

function setAccessToken(){
  const accessToken = sessionStorage.getItem('accessToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
