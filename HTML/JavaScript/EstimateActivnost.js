function EstimateActiv() {
var D1 = document.getElementById('PowerDose').value;
var x1 = document.getElementById('DistanceToSource').value;
var CF7 =  document.getElementById('CF7').value;
var d = document.getElementById('DepthScreen').value;
var d1_2 = 0;
if (document.getElementById('poglotit').checked){
  alert('Checked');
var d1_2 = document.getElementById('KoefficHalf').value;
}
alert('Run');
var A = (D1*x1*x1)/(CF7**Math.pow(0.5, d/d1_2));
document.getElementById('ResultActivnost').value = A.toFixed(3);
}
