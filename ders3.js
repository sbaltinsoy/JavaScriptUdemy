function f(x) {
  return 2 * x + 5;
}

function g(x) {
  return 3 * x;
}

console.log(f(g(3)));

var f = function (x) {
  return 2 * x + 5;
};

console.log(f(x));

var sayi = 20;

sayi = sayi / 2;
sayi /= 2;
sayi *= 3;
sayi += 5;

sayi++;
// burada once sayi yi yeniSayi ya atadi sonra sayi yi 1 azaltti
var sayi2 = 20;
yeniSayi = sayi--; // yani yeniSayi = 20 oldu sayi = 19 oldu
// burada once sayiyi 1 azaltti ve yeniSayiya atadi ynai
sayi2 = 20;
yenisayi = --sayi; // yeniSayi = 19   sayi2 = 19
