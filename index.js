const input = document.getElementById('input');
const output = document.getElementById('output');

var inArray = [];

function iPut(x) {
  inArray.push(x);
  input.textContent = inArray.join('');
}

function initialise() {
 //oDisplay.textContent = 0;
 input.textContent = '';
 inArray = [];
}
