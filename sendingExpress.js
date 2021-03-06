var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get('/content',function(req,res){
  res.sendFile(__dirname + "/content.html");
});
app.set('view engine', 'ejs');
app.get('/profile/:name',function(req,res){
  res.render('profile', {person:req.params.name});
});
app.listen(3000);
