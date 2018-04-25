
var  path = 'Penguins.jpg';
function GetFileName()
        {
        var fi = document.getElementById('file'); // GET THE FILE INPUT AS VARIABLE.


        if (fi.files.length > 0)
        {
          path =  fi.files.item.name;
          alert(path);
        }

    }

function ChangeImage(path) {
var a = document.getElementById('img');
a.src ='Picture/'
}
