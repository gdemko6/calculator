function add(a,b) {a+b}
function subtract(a,b) {a-b}
function divide(a,b) {a/b}
function multiply(a,b) {a*b}

function operate(a, b, operator){
    if (operator === "+") add(a,b);
    else if (operator === "-") subtract(a,b);
    else if (operator === "/") divide(a,b);
    else if (operator === "*") multiply(a,b);

    else alert("invalid operator!!");
}

let a;
let b;
let operator;
