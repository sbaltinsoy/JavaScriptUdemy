class Insan {
  constructor() {}
  konus() {}
  yurur() {
    console.log('yuru');
  }
}

class Ogretmen extends Insan {
  constructor() {
    super();
  }
  dersver() {}
  yuru() {
    super.yuru();
    console.log('Sinifta gez');
  }
}

x = new Ogretmen();

x.konus();
x.yurur();
x.dersver();

// Prototip tabanli
// eski yontem
// Bu cok dogru kullanim degil es5 de kaldi
function Insan() {}

Insan.prototype.konus = function () {};

Insan.prototype.yurur = function () {};

function Ogretmen() {}
// klonluyor
Ogretmen.prototype = Object.create(Insan.prototype);
//
Ogretmen.prototype.constructor = Ogretmen;
