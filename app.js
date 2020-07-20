var express = require('express');

var app = express();
var port = 1448;

app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res, next){
    console.log('get 1');
    res.sendFile(__dirname + '/static/home.html')
})

app.get('/login', function(req, res, next){
    res.sendFile(__dirname + '/static/login.html') 
})


app.listen(port);
console.error('Your server is runnign on port ' + port);