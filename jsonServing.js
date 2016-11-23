var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type":"application/json"});
  var myObj = {
    name: "Eric",
    job: "engineer",
    age: "29"
  };
  res.end(JSON.stringify(myObj));
});
myServer.listen(3000, "127.0.0.1");
console.log("Let's check the 3000 port");
