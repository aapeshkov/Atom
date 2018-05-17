// берём Express
var express = require('express');
// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/mainPage', function(req, res) {
  res.header ('href="/main.css" rel="stylesheet"' );
  res.sendfile('mainPage.html');
  res.sendfile('main.css');

});
app.get('/Activnost', function(req, res) {
  res.sendfile('Activnost.html');
});

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');
