let storedValue = "";
let currentValue = "";
let operator = "";

function deleteFromDisplay() {
    currentValue = currentValue.toString().slice(0,-1);
    updateDisplay();
}

function clearDisplay() {
    storedValue = "";
    currentValue = "";
    operator = "";
    updateDisplay();
}

function updateDisplay() {
    displayCurrentValue.innerText = currentValue;
    displayStoredValue.innerText = `${storedValue} ${operator}`;
}

function setOperator(inputValue) {
    operator = inputValue.toString();
}

function storeCurrentValue() {
    storedValue = currentValue.toString();
    currentValue = "";
}

function appendToCurrentValue(inputValue) {
    if (currentValue.includes(".") && inputValue == ".") {
        return
    }
    currentValue = currentValue.toString() + inputValue.toString();
}

function calculate() {
    let a = parseFloat(storedValue);
    let b = parseFloat(currentValue);

    switch (operator) {
        case "+": currentValue = a + b;
            break;
        case "-": currentValue = a - b;
            break;
        case "×":currentValue = a * b;
            break;
        case "÷": currentValue = a / b;
            break;
        default:
            break;
    }
    storedValue = "";
    operator = "";
}

const displayCurrentValue = document.querySelector("#current-value");
const displayStoredValue = document.querySelector("#stored-value");

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener('click', () => clearDisplay());

const deleteButton = document.querySelector("#delete-btn");
deleteButton.addEventListener('click', ()=> deleteFromDisplay());

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(element => {
    element.addEventListener('click', () => {
        appendToCurrentValue(element.innerText);
        updateDisplay();
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(element => {
    element.addEventListener('click', () => {
        setOperator(element.innerHTML);
        storeCurrentValue();
        updateDisplay();
    });
})

const calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener('click', () => {
    calculate();
    updateDisplay();
})