var port = (process.env.VCAP_APP_PORT || 3000);
var express = require('express');
var context = require('activitystreams-context');
var cors = require('cors');
var cache = require('cache-control');
var app = express();
app.use(cache({
  '/**': 'public, max-age: 3600'
}));
app.get('/', cors(), function(req, res) {
  res.set({
  	'Content-Location': 'http://www.w3.org/ns/activitystreams',
    'Content-Type': 'application/ld+json'
  });
  res.end(JSON.stringify(context));
});
var server = app.listen(port);
