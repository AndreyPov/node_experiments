var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/much_info.txt','utf-8');
var myWriteStream = fs.createWriteStream(__dirname + '/much_info2.txt');
myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
//myReadStrem.pipe(myWriteStream); //also works
