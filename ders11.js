// scope  Kapsam
// block scope olayi let sayesinde cozuldu

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
// sonuc 10 verdi ama disaridan i ye erismemek icin let kullanmamiz gerekiyor

var i = 'burak';
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
// burak sonucunu dondu i yi bozmadi for scope sayesinde
// let kullandigimiz icin disaridan erisilemez sadece bulundugu scope icindn erisilebili

// js de sadece fonksiyon scope vardir var turunde

var i = 'burak';

(function () {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
});

console.log(i);

// buradada i yi bozmadik cunku fonksiyonlarin kendi scope lari vardir
/////////////////////////////////////////////
// Hoisting

(function () {
  var a = 1;
  console.log(b);
  var b = 3;
})();

// burada kod hata vermez cunku tanimlamalar hoisting olur zaten a b tanimli olarak dusunulur ama sadece b nin degeri atanmamistir yani alttaki gibi
// okur js yukaridaki kodu

(function () {
  var a, b;
  a = 1;
  console.log(b);
  b = 3;
})();

// javascriptte fonksiyonlar ve degiskenler yukariya hoisting eedilir

// bu 2 si ayni seyler degildir

// degsiken deklerasyonu
var b = function () {
  return 1;
};
// fonksiyon deklerasyonu
function b() {
  return 1;
}
// ornek vericek olursak

(function () {
  var a = 1;
  console.log(b);
  function b() {
    return 1;
  }
})();
// 1 sonucu ekrana yazar

// aslinda
(function () {
  var a = 1;
  function b() {
    return 1;
  }
  console.log(b);
})();

// Js bu sekilde okur

(function () {
  return b();
  function b() {
    return 1;
  }
})();

// aslinda
(function () {
  function b() {
    return 1;
  }
  return b();
})();
// bu sekilde okunur

(function () {
  return b();
  var b = function () {
    return 1;
  };
})();

// aslinda

(function () {
  var b;
  return b();
  b = function () {
    return 1;
  };
})();
// budur o yuzden hata verir
//////////////////////////////////////////
// arguments

// Context

var a = 2;
window.a;

//bu aslinda bir window objesinin bir property sidir
function () {
  console.log(this)
}
// window objesini ekrana yazdirir


// Context Nedir ?
// Bir fonksiyonun bagli oldugu obje onun contextidir
// Bir fonksiyon bagli oldugu objeye this metodu ile ulasir

var burak = {
  name: 'Burak',
  surname: 'Altinsoy',
  fullname: function (){
    return this.name + ' ' + this.surname;
  }
}


// bir objenin bagli oldugu objeyi degistiriyoruz context switching
/*
.call : bagla
.bind : cagir
.apply : cagir , parametreler dizi olarak
*/

burak.fullname.apply({name: 'dogukan',surname: 'nomak'},[1])
burak.fullname.call({name: 'dogukan',surname:'nomak'}, 1)
var dogukanFullName = burak.fullname.bind({name: 'dogukan',surname:'nomak'}, 1)
dogukanFullName();