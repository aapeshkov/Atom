function showname () {
  var name = document.getElementById('file');
  alert('Selected file: ' + name.files.item(0).name);
var a = document.getElementById('img');
a.src = 'Picture/' + name.files.item(0).name;
alert('Picture/' + name.files.item(0).name);
};
