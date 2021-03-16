var islem1 = 2 * 5 + 10; // 20

var islem2 = 2 * (5 + 10); // 30

function fonksiyon(arg1, arg2) {}

if (1) {
  // dogruysa
} else {
  // yanlissa
}

var kisi = {
  adi: 'Burak',
  soyadi: 'Altinsoy',
};

var liste = [islem1, islem2];

// Tirnak Isaretleri
// escape \
('Bur"ak');

('Burak');

('Burak "Geliyorum" dedi.');
('Burak "Geliyorum" dedi.');

'Sonuc ' + islem1 + 'dir.';

// cok satirli stringler icin ` kullanilir
var selam = `
Adi : Serhat Burak
Soyadi :  Altinsoy
`;

`Sonuc ${islem1} dir`;
`Sonuc2 ${islem2} dir.`;

// CamelCase kullanilmali
// Sinif isimleri buyuk harfle
// fonksiyon isimleri kucuk harfle baslar

// Indentation kullanilmali girintili

// Gecici degiskenlerde basina alt tire koymalisin !
// Bu ornekte gecici degisken _i dir
var _i = 0;

while (_i < 10) {
  console.log('Merhaba');
  _i++;
}

// declare

var name = 'serhat',
  name2 = 'burak',
  surname = 'altinsoy',
  fullName = name1 + name2 + surname;

// fonksyon icerisinde degiskenlerin basina var koymamiz gerekiyor
// koyulmazsa eger kendini global ilan eder ve her yerde kullanilabilir

function fonksiyon() {
  var name = 'Merhaba';
  console.log(name);
}

function fonksiyon() {
  isim = 'Merhaba';
  console.log(isim);
}

// chrome konsolda dene
