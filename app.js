var port = (process.env.VCAP_APP_PORT || 3000);
var express = require('express');
var context = require('activitystreams-context');
var app = express();
app.get('/', function(req, res) {
  res.set({
  	'Access-Control-Allow-Origin': '*',
  	'Content-Location': 'http://activitystrea.ms/2.0/',
    'Content-Type': 'application/ld+json'
  });
  res.end(JSON.stringify(context));
});

var server = app.listen(port);
