// script.js
let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Tidak dapat membagi dengan 0!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    display.value = result;
    previousInput = '';
    currentInput = result.toString();
    operator = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    previousInput = '';
    operator = '';
}
