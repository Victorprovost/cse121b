/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
/* Function Declaration - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Declaration - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#subtract").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    const factor1 = Number(document.getElementById("factor1").value);
    const factor2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").textContent = `Product: ${multiply(factor1, factor2)}`;
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Arrow Function - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //processing
    if (document.getElementById("member").checked) {
        subtotal = subtotal - subtotal * 0.2; // 20% discount
    }
    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById("array").textContent = `Array: [${numbersArray.join(', ')}]`;

const oddNumbers = numbersArray.filter(num => num % 2 !== 0);

/* Output Odds Only Array */
document.getElementById("odds").textContent = `Odd Numbers: [${oddNumbers.join(', ')}]`;

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").textContent = `Sum of Array: ${numbersArray.reduce((sum, number) => sum + number, 0)}`;

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").textContent = `Multiplied by 2: [${numbersArray.map(number => number * 2).join(', ')}]`;
