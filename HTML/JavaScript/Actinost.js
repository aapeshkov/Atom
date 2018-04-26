


var calculate = function() {
var period = document.getElementById('period').value;
var activ =  document.getElementById('activnost').value;
var knownData =  document.getElementById('knownData').value;
var dataResult =  document.getElementById('dataResult').value;
var result = 0;
var interval = dataResult - knownData;
var stepen = (-interval/period);

result = activ*Math.pow(2, stepen);
alert(result.toFixed(3));
document.getElementById('result').value = result.toFixed(3);

}
