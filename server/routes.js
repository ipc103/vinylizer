'use strict';

require('./env.js')

const Spotify = require('spotify-web-api-node');
const express = require('express');
const router = new express.Router();

// configure the express server
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.redirect_uri || 'http://localhost:5000/spotify/callback';
const STATE_KEY = 'spotify_auth_state';
// your application requests authorization
const scopes = ['user-read-private', 'user-read-email'];

// configure spotify
const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

/** Generates a random string containing numbers and letters of N characters */
const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);


router.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});


router.get('/spotify/callback', (req, res) => {
  console.log("Hit the callback URL")
  res.redirect('/users')
});

module.exports = router;
