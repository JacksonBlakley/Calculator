var in_arr = "12/5*9+9.4*2";
var input = [];
var strX = []
var x = 2;
var y = 5;
var op = "/";

//strip anything other than digits, (), -+/* and . 
//var clean_arr = in_arr.replace(/[^-()\d/*+.]/g, '');

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate (x, y, operator) {
    if (operator == "+") {
        var value = add(x, y);
        return value;
    }
    else if (operator == "-") {
        var value = subtract(x, y);
        return value;
    }
    else if (operator == "*") {
        var value = multiply(x, y)
        return value;
    }
    else {
        var value = divide(x, y) 
        return value;
    }
}

function listen() {
    
    const allbtn = document.querySelectorAll('.btn');
    allbtn.forEach((div) => {
    div.addEventListener('click', () => {
    var x = div.id;
    strX.push(x);
    var cleanInput = strX.join('');
    const display = document.querySelector('#display');
    display.textContent = cleanInput;
    input = cleanInput;
    console.log('input = ' + input);
    });
    }); 

    const allOperand = document.querySelectorAll('.operand');
    allOperand.forEach((div) => {
    div.addEventListener('click', () => {
    var y = div.id;
    strX.push(y);
    var cleanInput = strX.join('');
    display.textContent = cleanInput;
    input = cleanInput
    console.log('input = ' + input);
    });
    }); 



}


function clear () {
    const clearbtn = document.querySelector('.clear');
    clearbtn.addEventListener('click', () => {
    input = [];
    strX = [];
    display.textContent = input;
    console.log('input = ' + input);
    })

}

function backspace () {
    const backspace = document.querySelector('.backspace');
    backspace.addEventListener('click', () => {
    input = input.slice(0,-1);
    display.textContent = input;
    console.log('input = ' + input);
    })
}

listen();
clear();
backspace ();


var solution = operate(x, y, op);
console.log("operate = " + solution);
