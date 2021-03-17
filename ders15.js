var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var inp = document.getElementById('inp');

btn.addEventListener('dragstart', function (e) {
  console.log(e);
});

btn.addEventListener('dragend', function (e) {
  console.log(e);
});

btn.addEventListener('click', function () {
  alert(1);
});

btn.addEventListener('click', function () {
  alert(2);
});

// mdn html events den bakabilirsin

function over(e) {
  e.target.style.backgroundColor = 'red';
}

function out(e) {
  e.target.style.backgroundColor = '';
}

btn.addEventListener('mouseover', over);

btn.addEventListener('mouseout', out);

btn2.addEventListener('mouseover', over);

btn2.addEventListener('mouseout', out);

inp.addEventListener('focus', function (e) {
  e.target.value = 'selam!';
});

inp.addEventListener('blur', function (e) {
  e.target.value = '';
});

// keyup tusu b iraktigimiz anda
// keydown bastigimiz anda
// keypress basili oldugu surece
inp.addEventListener('keyup', function (e) {
  e.target.value = e.target.value.toUpperCase();
});
