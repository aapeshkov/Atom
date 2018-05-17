var http = require('http');
var fs = require('fs');

  //  fs.readFileSync('main.css');
http.createServer(function(req, res){
  var info;
  if (req.url == '/mainPage'){
console.log('Succes');
info = fs.readFileSync('mainPage.html', function(err, info){
   if (err) {
     console.error(err);
     res.statusCode = 500;
     res.end("На сервере произошла ошибка!");
    return;
}
  console.log('Succes');
});
    res.write(info);
    res.end();
    console.log("Success MainPage");
  }


}).listen(8888);
