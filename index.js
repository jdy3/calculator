const inPut = document.getElementById('input');
const outPut = document.getElementById('output');

var inArray = [];
var numArray = [];
var minArray = [];
var opArray = [];
var calcArray = [];

var endCalc = false;

function iPut(x) {
  inArray.push(x);
  inPut.textContent = inArray.join('');
 }

function oPut(x) {
  if (x != '/' && x != '*' && x != '-' && x != '+') {
    if (endCalc == false) {
    calcArray.push(opArray.pop());
    opArray = [];
    calcArray.push(minArray.pop());
    minArray = [];
    numArray.push(x);
    outPut.textContent = numArray.join('');
    }
    else {
      initialise();
      calcArray.push(opArray.pop());
      opArray = [];
      calcArray.push(minArray.pop());
      minArray = [];
      numArray.push(x);
      outPut.textContent = numArray.join('');
      inArray.push(x);
      inPut.textContent = inArray.join('');
      endCalc = false;
    }
  }
  else if (x != '/' && x != '*' && x != '+') {
    calcArray.push(numArray.join(''));
    numArray = [];
    minArray.push(x);
    outPut.textContent = x;
    endCalc = false;
  }
  else {
    minArray = [];
    calcArray.push(numArray.join(''));
    numArray = [];
    opArray.push(x);
    outPut.textContent = x;
    endCalc = false;
  }
}

function calculate() {
  calcArray.push(numArray.join(''));
  numArray = [];
  var result = eval(calcArray.join(''));
  calcArray = [];
  calcArray.push(result);
  outPut.textContent = result;
  inArray.push(result);
  inPut.textContent = inArray.join('');
  endCalc = true;
 }

function initialise() {
 outPut.textContent = 0;
 inPut.textContent = '';
 inArray = [];
 numArray = [];
 calcArray = [];
}
