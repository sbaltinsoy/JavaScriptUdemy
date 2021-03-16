'JavaScript'.charAt(2);
// Sonuc v dir
'JavaScript'.charCodeAt(4);
// S nin ascii kodu 84
String.fromCharCode(83); // Sonuc S dir
// 2 string ifadeyi birlestirme
'JavaScript'.concat('cok guzel :)');
'JavaScript' + 'cok guzel :)';

// Sonunu kontrol eden fonk sonuc true false doner
'JavaScript'.endsWith('Script');
// true doner

// iceriyor mu
'JavaScript'.includes('Script');
// NERDEN BASLIYOR
'JavaScript'.indexOf('Script');
// ICERMIYORSA -1 DONER

// en sondan basladi aramaya
'JavaScript asdScript'.lastindexOf('Script');

// alfabetik siralama icin
'fatih'.localeCompare('dogukan', 'tr');
// 1 doner fatih dogukandan sonra diyor

'dogukan'.localeCompare('fatih', 'tr');
// -1 doner dogukan fatihten once diyor

'JS'.padEnd(10);
// "JS        " doner
'JS'.padStart(10);
//"        JS" doner

'JS'.repeat(10);
// "JSJSJSJSJSJSJSJSJSJS"

'JavaScript'.replace('Java', 'Selam');
//"SelamScript"

'JavaScript'.search(/Script/);
'JavaScript'.search('Script');

'JavaScript'.slice(0, 4);
//'Java'

'JavaScript'.split('');
//(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
'JavaScript ve Ruby'.split('ve');
//(2) ["JavaScript ", " Ruby"]

'JavaScript ve Ruby'.startsWith('Java');
//true

// substr ve substring
'JavaScript ve Ruby'.substr(3, 10);
// 3 den basla ve 10 karakter al demek
'JavaScript ve Ruby'.substring(3, 5);
// 3. karakterden basla ve 5. karaktere kadar al demek

// buyuk harf yap kucuk harf yap
'fatih'.toUpperCase();
'fatih'.toLocaleUpperCase('tr');
'fatih'.toLowerCase();
'fatih'.toLocaleLowerCase('tr');

// .toString stringe cevirmek demek

'  JavaScript   '.trim();
// kenardaki bosluklari siler
'  JavaScript   '.trimLeft();
'  JavaScript   '.trimRight();
