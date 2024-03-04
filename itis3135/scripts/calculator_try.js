let inputArray = [];
let isAnswered = false;

const operators = ['/', '*', '+', '-'];
const calculatorDisplay = document.getElementById('calc-display');

window.onload = () => {
    Array.from(document.querySelectorAll('.calc-keys button')).forEach((btn) => btn.addEventListener('click', (e) => {
        value = e.target.value;
    
        switch (value) {
            case "clear":
                clearDisplay();
                break;
            case "enter":
                resultDisplay();
                break;
            default:
                updateCalculator(value);
        }
    }));
}

const updateCalculator = (value) => {
    if (isAnswered) clearDisplay(); isAnswered = false;

    const isValid = value === '.' ? decimalValidator() : operatorValidator(value);

    if (isValid) {
        calculatorDisplay.innerText += value;
        inputArray.push(value);
    }
};

const clearDisplay = () => {
    calculatorDisplay.innerText = '';
    inputArray = [];
};

const operatorValidator = (value) => {
    if (operators.includes(value)) {
        if (operators.includes(inputArray[inputArray.length - 1])) {
            alert('Cannot use an operator on a preceding operator.');
            return false;
        }
    }
    return true;
}

const decimalValidator = () => {
    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (inputArray[i] === '.') {
            alert('Cannot have more than one decimal.');
            return false;
        } else {
            if (inputArray[i] === '/' || inputArray[i] === '*' || inputArray[i] === '+' || inputArray[i] === '-') {
                break;
            }
        }
    }
    return true;
}

const resultDisplay = () => {
    isAnswered = true;
    
    try {
        calculatorDisplay.innerText = eval(inputArray.join(''));
    } catch (error) {
        calculatorDisplay.innerText = 'Result is undefined';
    }
};