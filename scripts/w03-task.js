/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
};

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract() {
    return number1 - number2;
}
function SubtractNumbers() {
    let subtract1 = number(document.querySelector("#subtract1").value);
    let subtract2 = number(document.querySelector("#subtract2").value);
    document.querySelector("#subtract").value = Subtract(subtract1, subtract2);
};

document.querySelector("#subtractNumbers").addEventListener("click", SubtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    const factor1 = document.getElementById("factor1").value;
    const factor2 = document.getElementById("factor2").value;
    document.getElementById("product").textContent = `Product: ${product}`;

};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const Divide = (x, y) => x / y;

const divideNumber = () => {
    let dividend = parseFloat(document.getElementByid("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.tofixed(2);
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
    document.getElementById("total").textcontent = `$${subtotal.tofixed(2)}`;
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
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").textContent = `Sum of Multiplied by 2: ${sumOfMultiplied}`;