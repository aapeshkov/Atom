var calculate = function() {
var period = document.getElementById('period').value;
var activ =  document.getElementById('activnost').value;
var d1 = new Date(document.getElementById('knownData').value);
var d2 = new Date(document.getElementById('dataResult').value);
var d = Math.abs(d2 - d1);
var milliseconds = d;
var seconds = milliseconds / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24;
alert(days);
var stepen = (-days/period);

var result = activ*Math.pow(2, stepen);
alert(result.toFixed(3));
document.getElementById('result').value = result.toFixed(3);

}


/*function CalculateData() {
var d1 = new Date(document.getElementById('1').value);
var d2 = new Date(document.getElementById('2').value);
var d = Math.abs(d2 - d1);
var milliseconds = d;
var seconds = milliseconds / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24;

document.getElementById('txt').value = Math.ceil(days);;


}*/
