// Element

HTMLElement;
// HTML ELEMENT MIDIR true
document.body instanceof HTMLElement;
// html document midir true
document instanceof HTMLDocument;
// html elementleri onceli acilir sonra kapanirlar attributleri vardir

// <h1 class = "div1" id = "2">Selam<h1/>
document.getElementById('2');

var baslik = document.createElement('h1');
baslik.innerText = 'Merhaba';
document.body.appendChild(baslik);

var paragraf = document.createElement('p');
paragraf.innerText = 'nasilsin';
// basliktan once yaz
document.body.insertBefore(paragraf, baslik);

baslik.setAttribute('style', 'color:red');
baslik.style.color = 'orange';
// burada yazdigimiz seyi dom uzerinden elemente erisip degistirmemizi sagliyor
baslik.style.marginLeft = 10;
baslik.style.marginRight = 10;
