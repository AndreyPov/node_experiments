var express = require('express');
var fs = require('fs');
var ejs = require('ejs');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/profile/:name', function(req, res){
  app.set('view engine', 'ejs');
  var data = {age: 24, job: 'developer', hobbie: ['powerlifting', 'cycling', 'hiking', 'chess']};
  res.render('profile', {person: req.params.name, data: data});

});
app.listen('3000');
