function EffectiveDose() {
var A = document.getElementById('Activnost');
var CF7 = document.getElementById('CF7');
var CF6 = document.getElementById('CF6');
var d = 0;
var d1_2 = 1;
var x = document.getElementById('DistanceToSource');
var t = document.getElementById('Time');
var result = 0;

if (document.getElementById('poglotit').checked){
 d = document.getElementById('DepthOfScreen');
 d1_2 = document.getElementById('KoefficHalf');
}

if (document.getElementById('powerOfDose').checked) {
result = (A.value * CF7.value * t.value * Math.pow(0.5, d.value/d1_2.value))/Math.pow(x.value, 2);
document.getElementById('ResultEffectiveDose').value = result.toFixed(4);
} else {
result = (A.value * CF6.value * Math.pow(0.5, d.value/d1_2.value))/Math.pow(x.value, 2);
document.getElementById('ResultPowerOfDose').value = result.toFixed(4);
}


}
/*
function radio() {
if (document.getElementById('powerOfDose').checked) {

document.getElementById('CF6').classList.add('hidden');
}else {
document.getElementById('CF6').classList.add('unhidden');
}
} */
