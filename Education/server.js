var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

function send404(responce){
  responce.writeHead(404, {'Content-Type':'text/plain'});
  responce.write('Error 404: resource not found.');
  responce.end();
}
function sendFile(responce, filePath, fileContents){
  responce.writeHead(200, {"content-type":mime.lookup(path.basename(filePath))});
  responce.end(fileCpntents);
}

function serveStatic(responce, cache, absPath){
  if (cache[absPath]){
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function(exists){
      if (exists){
        fs.readFile(absPath, function(err, data){
          if(err){
            send404(response);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}

var server = http.createServer(function(request, response){
  var filePath = false;
  if (request.url == '/'){
    filePath = 'public/index.html';
  } else {
    fileParth = 'public' + request.url;
  }
  var absPath = './' + filePath;
  serverStatic(response, cache, absPath);
})
server.listen(300, function(){
  console.log("Server listening on port 3000.");
});
