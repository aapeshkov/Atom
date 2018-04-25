var calculate = function() {
var period = document.getElementById('#period').value;
var activ =  document.getElementById('#activnost').value;
var knownData =  document.getElementById('#knownData').value;
var dataResult =  document.getElementById('#dataResult').value;
var result = 0;

result = period*activ*knownData*dataResult;

document.getElementById('#result').value = result;

}
