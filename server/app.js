var express   = require('express'),
    httpProxy = require('http-proxy'),
    app       = express(),
    routes     = require('./routes');;

var apiProxy = httpProxy.createProxyServer()

var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var client = 'http://localhost:3000';

app.use('/', routes)

app.all("/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: client});
});


console.log("The app is up")
app.listen(5000);
