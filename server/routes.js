'use strict';

const Spotify = require('spotify-web-api-node');
const express = require('express');
const router = new express.Router();

// configure the express server
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:5000/spotify/callback';
const STATE_KEY = 'spotify_auth_state';
// your application requests authorization
const scopes = ['user-read-private', 'user-read-email'];

// configure spotify
const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});


router.get('/login', (_, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});


router.get('/spotify/callback', (req, res) => {
  console.log("Hit the callback URL")

  spotifyApi.authorizationCodeGrant(req.query.code).then(data => {
  const { expires_in, access_token, refresh_token } = data.body;

  // Set the access token on the API object to use it in later calls
  spotifyApi.setAccessToken(access_token);
  spotifyApi.setRefreshToken(refresh_token);

  // use the access token to access the Spotify Web API
  spotifyApi.getMe().then(({ body }) => {
    console.log(body);
  });

  // we can also pass the token to the browser to make requests from there
  res.redirect(`/user/${access_token}/${refresh_token}`);
  })
  .catch(err => {
    res.redirect('/error/invalid_token');
  });
});

module.exports = router;
