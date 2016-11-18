var fs = require('fs');
var readMe = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync("writeMe.txt", readMe);


fs.readFile('readme.txt','utf8', function(err, data){
  console.log(data);
  fs.writeFile('writeMe.txt', data);
});
