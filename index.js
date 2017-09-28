var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home'
  });
});

app.get('/about', function(req, res) {
  res.render('default', {
    title: 'About',
    classname: 'about'
  });
});


var server = app.listen(3000, function() {
  console.log('Listening on port 3000')
});