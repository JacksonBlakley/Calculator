var in_arr = "12/5*9+9.4*2";
var input = [];
var strX = [];
var cleanInput = [];
var counter = 0;

//strip anything other than digits, (), -+/* and . 
//var clean_arr = in_arr.replace(/[^-()\d/*+.]/g, '');

function add (x, y) {
    console.log("using add function!");
    return (x*100)/100 + (y*100)/100;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    if(y == 0) {
        input = [];
        strX = [];
        cleanInput = [];
        counter = 0;
        alert("Don't divide by zero. If you've figured out how to divide by zero, let us know.");
        console.log('divide by zero');
    }
    else {
    return x / y;
    }
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
    strX = strX + x;
    strX = parseInt(strX);
    const display = document.querySelector('#display');
    display.textContent = cleanInput + strX;
    console.log('tempX = ' + strX);
    console.log(typeof strX);

    });
    }); 

    const allOperand = document.querySelectorAll('.operand');
    allOperand.forEach((div) => {
    div.addEventListener('click', () => {
    var y = div.id;
    input[counter] = strX;
    counter++;
    input[counter] = y;
    counter++;
    cleanInput = input.join('');
    display.textContent = cleanInput;
    strX = [];
    console.log('input = ' + input);
    var checkInput = (input[0]);
    console.log(checkInput);
    });
    }); 



}


function clear () {
    const clearbtn = document.querySelector('.clear');
    clearbtn.addEventListener('click', () => {
    input = [];
    strX = [];
    cleanInput = [];
    counter = 0;
    display.textContent = input;
    console.log('input = ' + input);
    })

}
//This doesn't work yet!
function backspace () {
    const backspace = document.querySelector('.backspace');
    backspace.addEventListener('click', () => {
    console.log("backspace = " + input);
    if (strX != []) {
        strX = Math.floor(strX/10);
        console.log('StrX = ' + strX);
    }
    else {
    input = input.slice(0,-1);
    counter--;
    }
    cleanInput = input.join('');
    display.textContent = cleanInput + strX;
    console.log('input = ' + input);
    })
}

function solve () {
    const equal = document.querySelector('.equal');
    equal.addEventListener('click', () => {
        input[counter] = strX;
        console.log("solve input = " + input);
        console.log('input length = ' + input.length);
        for(var i = 0; i < input.length; i++) {
            if (input[i] == '*' || input[i] == '/') {
                console.log('multiply/divide');
                var solution = operate(input[i - 1], input[i + 1], `${input[i]}`);
                input.splice(i - 1, 3, solution);
                console.log('new index = ' + input);
                i = 0;
            }}
        for(var i = 0; i < input.length; i++) {
            if (input[i] == '+' || input[i] == '-') {
                console.log('add/subtract');
                var solution = operate(input[i - 1], input[i + 1], `${input[i]}`);
                input.splice(i - 1, 3, solution);
                console.log('new index = ' + input);
                i = 0;
            }}
        
        display.textContent = input;
        input = [];
        strX = [];
        cleanInput = [];
        counter = 0;
        console.log('clear index' + input);

    
    })

 
}



listen();
clear();
backspace ();
solve();

