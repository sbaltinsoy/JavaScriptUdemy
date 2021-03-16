// Bir obje olusturduk
// icine fonk obje vs istedigimizi ekleriz
var nesne = {
  name: 'Burak',
  surname: 'ALTINSOY',
  age: 23,
};

Object.keys(nesne);
//(3) ["name", "surname", "age"]
Object.values(nesne);
//(3) ["Burak", "ALTINSOY", 23]

function f(x, ...y) {
  return [x, y];
}
f(3, 4, 5, 6, 7, 8);

// await sayesinde callback hell muhabbeti cozuldu
// await sayesinde isin bitmesini bekleyip daha sonra diger satira geciyor islem yapmak icin

var response = await $.get('https://google.com');
var baslik = response.title;

// await olmasi icinde async olmasi gerekiyor

// direk cagrilan fonksiyonlar var

(function () {
  alert(1);
})();
