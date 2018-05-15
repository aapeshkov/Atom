var http = require('http');

var server = new http.Server();

server.listen(8888);

server.on('request', function(req, res) {
res.end("Привет, мир!");


});
