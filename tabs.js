var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function(req, res){

  if (req.url === "/home" || req.url === "/"){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (
    req.url === "/contact"){
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname + "/content.html").pipe(res);
  } else {
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname + "/cannotFind.html").pipe(res);
  }
});

myServer.listen(3000, "127.0.0.1");
