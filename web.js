var express = require('express');
var app = express.createServer(express.logger());
var sys=require("sys"), fs=require("fs");
var fileinput = fs.readFileSync("index.html");
var test = new Buffer(fileinput);
var readynow = test.toString("utf-8");


app.get('/', function(request, response) {

  response.send(readynow);

});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
