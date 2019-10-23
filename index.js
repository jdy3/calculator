const inPut = document.getElementById('input');
const outPut = document.getElementById('output');

var inArray = [];
var numArray = [];
var opArray = [];
var calcArray = [];

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
    calcArray.push(numArray.join(''));
    numArray = [];
    calcArray.push(x);
    //opArray.push(x);
    outPut.textContent = x;
  }
}

function calculate() {
  calcArray.push(numArray.join(''));
  numArray = [];
  var result = calcArray.join('');
  outPut.textContent = eval(result);
  calcArray = [];
  //outPut.textContent = result;
}

function initialise() {
 outPut.textContent = 0;
 inPut.textContent = '';
 inArray = [];
 numArray = [];
 opArray = [];
}
