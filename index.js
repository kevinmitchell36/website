var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello Express');
});

app.get('/who/:name?', function(req, res) {
  var name = req.params.name;
  res.send(name + 'was here');
});

app.get('/who/:name?/:title?', function(req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000')
});