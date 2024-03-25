var fs = require('fs')

// ____________________________________________________________________________________________________________________________________________
// READ DATA
var data = "";

var readStream = fs.createReadStream('test.txt', {highWaterMark: 32});
// var readStream = fs.createReadStream('test.txt');
var writeStream = fs.createWriteStream('test_copy_write.txt')
readStream.setEncoding('utf-8')
readStream.chunk

readStream.on('data', function(chunk){
    // console.log(chunk)
    console.log(chunk.length)
    data+=chunk;
});
// WRITE DATA
writeStream.on("end", function(){
    console.log("Writing is ended") 
    console.log("Ket thuc chuong trinh");
})

readStream.on('end',function(){
    // console.log(data)
    console.log("The reading ends. Starting write")
    writeStream.write(data, "utf-8");
})

readStream.on('error', function(err){
    console.log(err.stack)
})

// console.log('Program is ended')
writeStream.on('error', function(err){
    console.log(err.stack);
 });

 console.log('END 1')


// ____________________________________________________________________________________________________________________________________________
//  PIPE
var readStream2 = fs.createReadStream('test.txt')
var writeStream2 = fs.createWriteStream('test_copy_write_pipe.txt')

readStream2.pipe(writeStream2)
console.log('END 2')

//  ____________________________________________________________________________________________________________________________________________
// ZIP FILE

// var zlib = require('zlib');
// fs.createReadStream('test.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('test_copy_zip.txt.gz'));

// console.log('END 3')

//  ____________________________________________________________________________________________________________________________________________
var zlib = require('zlib');
fs.createReadStream('test_copy_zip.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('test_copy_unzip.txt'))
console.log('END 4')