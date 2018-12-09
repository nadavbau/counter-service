var express = require('express');
var app = express();
var count = 0

app.get('/', function(req, res){
   res.send("Number of POST requests: " + count);
});
app.post('/', function(req, res){
   count++;
   res.send("POST request received.");
});
app.listen(8001, '127.0.0.1');