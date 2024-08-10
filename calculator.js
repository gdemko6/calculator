function add(a,b) {a+b}
function subtract(a,b) {a-b}
function divide(a,b) {a/b}
function multiply(a,b) {a*b}

function operate(a, b, operator){
    let result;
    if (operator === "+") result = add(a,b);
    else if (operator === "-") result = subtract(a,b);
    else if (operator === "/") result = divide(a,b);
    else if (operator === "*") result = multiply(a,b);

    else alert("invalid operator!!");
    return result;
}

let a;
let b;
let operator;

let displayVal = 0;
let display = document.querySelector("#display");

function populateDisplay(num){
    display.innerHTML = num;
}