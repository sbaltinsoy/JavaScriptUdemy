// atob btoa binary to ascii
// decodeURIComponent('akin')
//encodeURIComponent('akin')
// setInterval(function () {console.error('Merhaba!') }, 10000)
// bu belli araliklarla yani yanda belirtilen sure araliklariyla calisir
// setTimeOut(function () {console.error('Merhaba!') }, 10000)
// 1 kere calisir bekleterek yapar
// var timer = setTimeOut(function () {console.error('Merhaba!') }, 10000)
// clearTimeout(timer)
// yukaridaki fonk ise timeout u durdurmaya yarayan fonk bu yuzden calismaz

// ornek

var timer = setTimeOut(function () {
  console.error('Merhaba!');
}, 1000);
setTimeout(function () {
  clearTimeout(timer);
}, 10001);
// durduramadi cunku arada 1 milisaniye fark var

// ornek2

var i = 10;
var timer;
timer = setInterval(function () {
  console.error(--i);
  if (i == 0) clearInterval(timer);
}, 1000);

// ctrl space -> window demeye gerek kalmaz

(function (x, y) {}.length);
// parametre sayisini verir

console.assert(1 == 2, '1 ile 2 esit degildir');
console.assert(1 == 1);

console.clear();

console.dir(new String('burak'));
// butun ozellikleri doker

console.table({ a: 1 });

console.group('merhaba');
// consolda yazdiklarimizi gruplamamiza yariyor

console.groupEnd();
// dedigimizde gruptan cikiyor

// onemli !!
window.isNaN('A12');

eval('alert(2)');
//undefined
confirm('hey');
//true
prompt('adin ne');
//"burak"

// eval yerine kullanabilirsin
JSON.parse(data);

fetch();
// veri ceckmeye yarar

// attribute ozellik
