// Bu bir obje olmus oldu
var insan = {
  name: 'Burak',
  surname: 'Altinsoy',
  age: 23,
  speak: function () {
    alert('Merhaba Arkadaslar');
  },
};

/////////////////////////////

function Insan(name, surname, age) {
  var x = 10;  // PRIVATE
  var y = function () { // private
    console.log('Merhaba Arkadaslar' + x);
  }
  return {
    name: name,
    surname: surname,
    age: age,
    y();
  };
}

var burak = new Insan('burak', 'altinsoy', 23);
var selcuk = new Insan('selcuk', 'candan', 23);
