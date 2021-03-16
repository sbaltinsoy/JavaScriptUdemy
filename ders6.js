// telefon numarasi regex hali
// +90 555 3000 80 80
telefon = /(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/;

// burada tel noyu bulup yerine *** koyuyor
`merhaba, benim telefon numaram:
05522000972'dir`.replace(
  /(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm,
  '***'
);
// burada telefon numarasini disariya cikariyor
`merhaba, benim telefon numaram:
05522000972'dir`.match(
  /(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm
);

plaka = /(\d{2})\s?([A-Z]{1,3})\s?(\d{2,4})/; /*

^[abc].*$  // a yada b yada c baslar sonra sonsuz karakter farketmez
^ en bas demek
$ en son demek

[a-c] a dan c ye kadar
[a-zıiğĞşŞüÜöÖçÇ] TURKCE KARKTERLERI DAHIL ETMEK ICIN EKLEDIK SONRADAN */

/* /\d/ = /[0-9]/
/\D/ = /[^0-9]/
/\w/ = /[A-Z]/
/\W/ = /[^A-Z]/
/\s/ = bosluk
/\d{1,}/ = /\d+/
/\d{0,}/ = /\d*/
