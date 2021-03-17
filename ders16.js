// cookie
// sunucudan da atanabiliyor
// yani js disindada atanabilir
document.cookie = 'name=burak';
document.cookie = 'surname=altinsoy';
// burada coookie ustune ekler silme yapmaz
// silmek icinse
// cookie expires yazarak bakabilirsin

// local storage single pagelerde kullanmak daha mantikli
// daha esnek daha kabiliyetli
localStorage.name = 'burak';
localStorage.getItem('name');
localStorage.setItem('name', 'merhaba');
// silmek icinse
localStorage.removeItem('name');
// sadece string kaydedebilirsiniz
// JSON bile kaydedersiniz string olarak tutar
// bu sekilde tutabilirsiniz
localStorage.setItem('name', JSON.stringify({ a: 1 }));
localStorage.getItem('name');
JSON.parse(localStorage.getItem('name'));

// js lzw compression
// kucultmek icin bakabilirsin
