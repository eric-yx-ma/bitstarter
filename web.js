var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var file = fs.readFileSync("index.html");
var filetext = file.toString();

app.get('/', function(request, response) {
  response.send(filetext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
