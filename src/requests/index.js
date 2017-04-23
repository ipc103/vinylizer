import axios from 'axios'

const BASE_URL =  'https://api.spotify.com/v1'
const tracksUrl = `${BASE_URL}/me/top/tracks`

export function getTopTracks(){
  setAccessToken()
  return axios.get(tracksUrl)
}

function setAccessToken(){
  const accessToken = sessionStorage.getItem('accessToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
