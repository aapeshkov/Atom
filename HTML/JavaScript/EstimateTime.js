function estimateTime() {
  var A = document.getElementById('Activnost').value;
  var CF6 = document.getElementById('CF6').value;
  var d = 0;
  var d1_2 = 1;
  var x1 = document.getElementById('DistanceToSourceStart').value;
  var x2 = document.getElementById('DistanceToSourceFinish').value;
  var t = document.getElementById('Time').value;
  var speed = document.getElementById('Speed').value;
  var E = document.getElementById('LimitEffDose').value;
  var result = 0;
  if (document.getElementById('poglotit').checked){
   d = document.getElementById('DepthOfScreen').value;
   d1_2 = document.getElementById('KoefficHalf').value;
  }



if (document.getElementById('estimateOfSpeed').checked){
  result = A * CF6 * Math.pow(0.5, d/d1_2) * (x2/(E*x1*(x1+x2)));
  document.getElementById('resultSpeed').value = result.toFixed(4);
} else if (document.getElementById('estimateOfEffDose').checked){
  var E2 = (A * CF6 * t * Math.pow(0.5, d/d1_2))/(Math.pow(x2, 2));
  var E1 = A * CF6 * Math.pow(0.5, d/d1_2) * (x2/(speed*x1*(x1+x2)));
  result = E2 + E1;
  document.getElementById('resultEffDose').value = result.toFixed(4);

}else {
result = (E*x1*(x1+x2))/(x2*A*CF6* Math.pow(0.5, d/d1_2))
document.getElementById('resultTime').value = result.toFixed(4);
}
}
