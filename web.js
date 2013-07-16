var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello Wasdfadforld 2!');

fs.writeFile('index.html', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

buffer.toString("utf-8", 0, 12)
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
