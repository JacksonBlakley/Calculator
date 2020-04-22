var in_arr = "12/5*9+9.4*2";
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

var solution = operate(x, y, op);
console.log("operate = " + solution);
