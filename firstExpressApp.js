var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("Hey man! Your express works great!");
});
app.get('/contact', function(req, res){
  res.send("Here is some info about us:");
});
app.listen(3000);
