var express   = require('express'),
    app       = express(),
    path      = require('path'),
    routes    = require('./routes');

var express  = require('express');
var app      = express();

app.use('/', routes)
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

var port = process.env.port || 5000;
app.listen(port);
