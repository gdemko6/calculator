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

let a = "";
let b = "";
let operator = "";
let operators = ["+", + "-", + "/" + "*"];

let displayVal = "";
let display = document.querySelector("#display");

function populateDisplay(buttonPressed){
    if(buttonPressed.includes("clear")){
        clear();
        return;
    }
    display.innerHTML = buttonPressed;
}

function clear(){
    display.innerHTML=0;
    a="";
    b="";
    operator="";
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(operator==="" && operators.every(operand => !displayVal.includes(operand))){
            a += String(button.innerHTML);
            displayVal+= a;
        }
        populateDisplay(displayVal);
    });
    
})