var port = (process.env.VCAP_APP_PORT || 3000);
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.set({
  	'Access-Control-Allow-Origin': '*',
  	'Content-Location': 'http://activitystrea.ms/2.0/',
    'Content-Type': 'application/ld+json'
  });
  res.sendfile('activitystreams.jsonld');
});

function setup(id) { 
  id = id + '.jsonld';
  app.get('/actions.jsonld', function(req, res) {
    res.set({
  	  'Access-Control-Allow-Origin': '*',
  	  'Content-Location': 'http://activitystrea.ms/2.0/' + id,
  	  'Content-Type': 'application/ld+json'
    });
    res.sendfile(id);
  });
}

[ 'actions', 
  'activitystreams-supplemental', 
  'schema2as']
    .forEach(setup);

var server = app.listen(port);
