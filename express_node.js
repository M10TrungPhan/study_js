var express = require('express')
var app = express();

app.use(express.static('public'))

app.get("/", function(req, res){
    res.send("Hello world")
})

// Phuong thuc post() phan hoi mot POST Request ve Homepage
app.post('/', function (req, res) {
    console.log("Received a POST Request to Homepage");
    res.send('Hello POST');
 })
 
 // Phuong thuc delete() phan hoi mot DELETE Request ve /del_user page.
 app.delete('/del_user', function (req, res) {
    console.log("Received a  DELETE Request to /del_user");
    res.send('Hello DELETE');
 })
 
 // Phuong thuc nay phan hoi mot GET Request ve /list_user page.
 app.get('/list_user', function (req, res) {
    console.log("Received a GET Request to /list_user");
    res.send('Page Listing');
 })
 
 // Phuong thuc nay phan hoi mot GET Request ve abcd, abxcd, ab123cd, ...
 app.get('/ab*cd', function(req, res) {   
    console.log("Received a GET request to /ab*cd");
    res.send('Page Pattern Match');
 })

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/"+ 'index.html')
})

app.get('/process_get',function(req,res){
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

var server = app.listen(8083, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Application is listening in address: http//%s:%s',host,port)

})