// sonsuz dongu
function recursiveFonk() {
  console.log('Kendi icinde kendini cagiran fonk');
  recursiveFonk();
}

function recursiveFonk(i) {
  console.log('Kendi icinde kendini cagiran fonk');
  if (i > 0) {
    recursiveFonk(i - 1);
  }
}

var i = 0;

while (i < 0) {
  console.log('merhaba');
  i += 2;
}

i = 0;
do {
  console.log('merhaba');
  i += 2;
} while (i < 0);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// for in yapuu
// a ve b alinda index
var nesne = { a: 1, b: 2 };

for (var i in nesne) {
  console.log(i);
}

i = 0;
while (true) {
  if (i == 5) {
    i++;
    continue;
  }
  console.log('merhaba');
  i++;
  if (i == 10) break;
}

//recursive Fonksiyonlar da break ise yaramaz
