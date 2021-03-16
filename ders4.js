function a() {
  console.log('a kontrol edildi , dogru');
  return true;
}
function b() {
  console.log('b kontrol edildi , dogru');
  return true;
}
function c() {
  console.log('c kontrol edildi , yanlis');
  return false;
}

console.log(a() || b() || c()); // true doner
// Burada a kontrol edildi true b kontrol edildi true c kontrol edildi false sonuc false
console.log(a() && b() && c()); // false doner
// Burada c kontrol edildi false sonuc direk false doner
console.log(c() && b() && a());

if (true && true) {
  console.log('Dogru');
} else {
  console.log('Yanlis');
}

// Ternary

console.log(true && true ? 'Dogru' : 'Yanlis');

// if else ornek

var havaDurumu = 'yagmurlu';
var evdeSemsiyeVar = true;
var arabaVar = garajdakiArabaSayisi > 0;
var garajdakiArabaSayisi = 3;

if (havaDurumu == 'yagmurlu' || havaDurumu == 'karli') {
  if (evdeSemsiyeVar) {
    console.log('Semsiyeyi al.');
    if (arabaVar) {
      console.log('Arabayla ise git');
    } else {
      console.log('Yuruyerek ise git');
    }
  } else {
    console.log('Ise gitme.');
  }
} else {
  if (arabaVar) {
    console.log('Arabayla Ise git');
  } else {
    console.log('Yuruyerek ise git');
  }
}

if ((havaDurumu == 'yagmurlu' || havaDurumu == 'karli') && evdeSemsiyeVar) {
  console.log('Semsiyeyi al.');
  arabaVar ? console.log('Arabayla ise git') : console.log('Yuruyerek ise git');
} else if (
  (havaDurumu == 'yagmurlu' || havaDurumu == 'karli') &&
  !evdeSemsiyeVar
) {
  console.log('Ise gitme.');
} else {
  arabaVar ? console.log('Arabayla ise git') : console.log('Yuruyerek ise git');
}

// switch - case yapisi

var arabaSayisi = 5;
switch (arabaSayisi) {
  case 1:
    console.log('Araban guzelmis');
    break;
  case 2:
    console.log('2 araban varnmis');
    break;
  default:
    console.log('Cok araban varmis');
}
