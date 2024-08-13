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
let operators = ["+", "-", "/", "*"];

let displayVal = "";
let display = document.querySelector("#display");

function populateDisplay(displayVal){
    display.innerHTML = displayVal;
}

function clear(){
    display.innerHTML=0;
    a="";
    b="";
    operator="";
    displayVal = "";
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(operators.includes(button.innerHTML)){
            if(operator === ""){
                operator = button.innerHTML;
                displayVal += String(button.innerHTML);
                populateDisplay(displayVal);
            }
        }
        else if(button.innerHTML == "clear") {
            clear();
        }
        else if(operator===""){
            a += String(button.innerHTML);
            displayVal = displayVal + String(button.innerHTML);
            populateDisplay(displayVal);
        }
        else {
            b += String(button.innerHTML);
            displayVal = displayVal + String(button.innerHTML);
            populateDisplay(displayVal);
        }
        
    });
    
})