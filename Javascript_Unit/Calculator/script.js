const displayNum = document.getElementById("display");
const displayLogNum = document.getElementById("display-log");
let buffer = '';
let current = '';
let previousOperator = '';


function press(num) {
    current += num;
    displayNum.innerText = current;
    if (displayLogNum.innerText === '0'){
        displayLogNum.innerText = current;
    } else {
        displayLogNum.innerText += num;
    }
}

function setOP(operator) {
    previousOperator = operator;
    if (!buffer){
        buffer = current;
        current = '';
    } else {
        current = '';
    }
    displayNum.innerText = 0;
    displayLogNum.innerText += operator;
}

function clr() {
    previousOperator = '';
    buffer = '';
    current = '';
    displayNum.innerText = 0;
    displayLogNum.innerText = 0;
}

function calculate () {
    var bufferNum = parseFloat(buffer);
    var currentNum = parseFloat(current);
    if (previousOperator === '+'){
        bufferNum += currentNum;
        buffer = bufferNum;
        displayNum.innerText = bufferNum;
    } else if (previousOperator === '-'){
        bufferNum -= currentNum;
        buffer = bufferNum;
        displayNum.innerText = bufferNum;
    } else if (previousOperator === '*'){
        bufferNum *= currentNum;
        buffer = bufferNum;
        displayNum.innerText = bufferNum;
    } else if (previousOperator === '/'){
        bufferNum /= currentNum;
        buffer = bufferNum;
        displayNum.innerText = bufferNum;
    }
}