function showname () {
<<<<<<< HEAD
  var name = document.getElementById('fileInput');
  alert('Selected file: ' + name.files.item(0).name);
  alert('Selected file: ' + name.files.item(0).size);
  alert('Selected file: ' + name.files.item(0).type);
};

var ChangeImage = function() {
alert('Run');
  }
=======
  var name = document.getElementById('file');
  alert('Selected file: ' + name.files.item(0).name);
var a = document.getElementById('img');
a.src = 'Picture/' + name.files.item(0).name;
alert('Picture/' + name.files.item(0).name);
};
>>>>>>> 60ab003ebca60c05d79967af471d4f030d8b5f2f
