var fs = require('fs');

fs.unlink('delete.txt');
fs.mkdirSync('newFolderSync');
fs.mkdir('NewFolderAsync',function(){
  fs.readFile('readMe.txt','utf-8',function(err, data){
      fs.writeFile('./NewFolderAsync/writeMe.txt',data);
   });
});
fs.unlink('./NewFolderAsync/writeMe.txt', function(){
  fs.rmdir('NewFolderAsync');
});
