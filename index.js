const inPut = document.getElementById('input');
const outPut = document.getElementById('output');

var inArray = [];
var numArray = [];
var opArray = [];

function iPut(x) {
  inArray.push(x);
  inPut.textContent = inArray.join('');
 }

function oPut(x) {
  if (x != '/' && x != '*' && x != '-' && x != '+' && x != '=') {
    numArray.push(x);
    outPut.textContent = numArray.join('');
  }
  else {
    opArray.push(x);
    numArray = [];
    outPut.textContent = x;
  }
}

function calculate() {
  //result = 3+5*6-2/4;
  //outPut.textContent = result;
  outPut.textContent = 'result!';
}

function initialise() {
 outPut.textContent = 0;
 inPut.textContent = '';
 inArray = [];
 numArray = [];
 opArray = [];
}
