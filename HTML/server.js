var http = require('http');
var fs = require('fs');

    fs.readFileSync('main.css');
http.createServer(function(req, res){
  var info;
  if (req.url == '/mainPage'){

  info = fs.readFileSync('mainPage.html', function(err, info){
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("На сервере произошла ошибка!");
      return;
    }
    res.end(info);
    console.log("Success MainPage");
  });
} else if (req.url == '/Activnost'){
  info = fs.readFileSync('Activnost.html', function(err, info){
    res.end(info);
    console.log("Success Activnost");
  })
}

}).listen(8888);
