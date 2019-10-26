const inPut = document.getElementById('input');
const outPut = document.getElementById('output');

var inArray = [];
var numArray = [];
var minArray = [];
var opArray = [];
var calcArray = [];

var endCalc = false;
var disableDecimal = false;

function iPut(x) {
  /*if (x == '.' && disableDecimal == true) {
    }
  else {*/
  inArray.push(x);
  inPut.textContent = inArray.join('');
  //}
}

function oPut(x) {
  if (x == '.') {
    if (endCalc == false) {
    if (disableDecimal == false) {
      calcArray.push(opArray.pop());
      opArray = [];
      calcArray.push(minArray.pop());
      minArray = [];
      numArray.push(x);
      outPut.textContent = numArray.join('');
      disableDecimal = true;
    }
    else {
    }
  }
  else {
    if (disableDecimal == false) {
      initialise();
      calcArray.push(opArray.pop());
      opArray = [];
      calcArray.push(minArray.pop());
      minArray = [];
      numArray.push(x);
      outPut.textContent = numArray.join('');
      inArray.push(x);
      inPut.textContent = inArray.join('');
      disableDecimal = true;
    }
    else {
    }
  }
}
  else if (x != '/' && x != '*' && x != '-' && x != '+') {
    if (endCalc == false || disableDecimal == true) {
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
    disableDecimal = false;
    minArray.push(x);
    outPut.textContent = x;
    endCalc = false;
  }
  else {
    minArray = [];
    calcArray.push(numArray.join(''));
    numArray = [];
    disableDecimal = false;
    opArray.push(x);
    outPut.textContent = x;
    endCalc = false;
  }
}

function calculate() {
  calcArray.push(numArray.join(''));
  numArray = [];
  disableDecimal = false;
  var result = eval(calcArray.join(''));
  calcArray = [];
  calcArray.push(result);
  outPut.textContent = result;
  inArray.push(result);
  inPut.textContent = inArray.join('');
  endCalc = true;
 }

function initialise() {
 inArray = [];
 numArray = [];
 calcArray = [];
 outPut.textContent = 0;
 inPut.textContent = inArray.join('');
}
