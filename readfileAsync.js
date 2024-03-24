var fs = require('fs') ;
console.log('Read file 1');
fs.readFile('test.txt', function(err, data){
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log('Read file 2');

fs.readFile('test.txt', function(err, data){
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('Program is Ends');