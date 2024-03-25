var http = require('http')
var url = require("url")
var fs = require('fs')

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname

    console.log("Request for " + pathname +" has received")

    fs.readFile(pathname.substring(1), function(err, data){
        if (err){
            console.log(err)
            response.writeHead(404,  {'Content-Type': 'text/html'})
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data.toString())
        }
        response.end()
    })
}).listen(8082)

console.log('Server is running in 8082')