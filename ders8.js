//10 / 0 sonsuz sayidir

Number.isFinite(10 / 0);
// sonlu mu diye soruyoruz false doner sonsuz der

Number.parseFloat('1.2');
//1.2
Number.parseInt('1.2')(
  // 1

  2
)
  .toExponential()(
    // "2e+0"  bilimsel sayi karsiligi

    2
  )
  .toFixed(2);
// '2.00'

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// herbiri icin bakar number mi diye sonuc true doner
a.every(function (item) {
  return typeof item == 'number';
});
// bazilari number mi diye bakar
a.some(function (item) {
  return typeof item == 'number';
});

a.fill(5); // dersek tum uyeleri 5 yapar
// 10 elemanli bir array olusturdu butun elemanlari 1
Array(10).fill(1);
// cift sayilari filtreledik
a.filter((item) => item % 2 == 0);

a.find((item) => item % 2 == 1);
// 1 doner ilk buldugu degeri doner
//a.findIndex dersek indexini doner bize

// herbiri icin doner
a.forEach(function (item) {
  console.log(item);
});

// includes indexOf ayni stringlerdeki gibi

a.join(', ');
// aralarina virgul koyarak siralar
a.join(' ve ');
// dersek aralarina ve baglaci koyarak siralar

// map dedigimiz zaman arrayi degistiriyoruz
a.map((item) => item + 3);
// buruda butun elemanlari 3 arttirdik arrayin elenanlari degisti return etme ozelligi vardir

a.pop();
// son elemani diziden cikarir
a.shift();
// ilk elemani diziden cikarir
a.push(7);
// eleman ekler a dizisine
a.unshift(2);
// en basa eleman ekler
a.reverse();
// elemanlari sondan basa dizer yer degsitirir son eleman ilk eleman olur tarzinda

a.slice(0, 2);
// 0 dan 2 dilim aliyor

a.sort();
// dersek kucukten buyuge dizeler

// burada alfabetik baktigi icin duzgun siralar ama fonk yazmasaydik
// ascii kodlarina gore siralayacagi icin yanlis siralama elde ederdik
['dogukan', 'fatih', 'ali'].sort((a, b) => a.localeCompare(b, 'tr'));
