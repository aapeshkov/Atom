var distanceToSource = function() {
var d1 = document.getElementById('PowerM1').value;
var d2 = document.getElementById('PowerM2').value;
var x = document.getElementById('distanceBetween').value;
var a = d1/d2;
var x1 = 0;
if (document.getElementById('distanceToSource').checked){
x1 = x/(1-Math.sqrt(a));
alert(d1);
} else {
   x1 = (d2*(1-Math.sqrt(a)))/Math.sqrt(a)
   alert(d2);
}
document.getElementById('M1toSource').value = x1.toFixed(2);
}
