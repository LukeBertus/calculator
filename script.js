// #region querySelectors
const title = document.querySelector("#title");
const calculator = document.querySelector("#calculator");
const buttons = document.querySelectorAll(".buttons")
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")

const addButton = document.querySelector("#add")
const subtractButton = document.querySelector("#subtract")
const muliplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")
const powerButton = document.querySelector("#power")
const squarerootButton = document.querySelector("#squareroot")
const acButton = document.querySelector("#ac")
const equalsButton = document.querySelector("#equals")

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
// #endregion

//#region aspect ratios
//sets calculator to 61:100 ratio
const  calculatorHeight = calculator.offsetHeight;
calculator.style.cssText = `width: ${0.61*calculatorHeight}px`;

//uses height of button seven to set the font to half the button container
const buttonHeight = seven.offsetHeight;
buttons.forEach(e => e.style.fontSize = `${buttonHeight/2}px`);
//#endregion

title.style.cssText = `margin: ${0.02*calculatorHeight}px; font-size: ${0.09*calculatorHeight}px`;
display.style.cssText = `padding: 0px ${0.015*calculatorHeight}px; font-size: ${0.12*calculatorHeight}px`;

// #region Computations
add = (a, b) => {return(parseInt(a)+parseInt(b))};
subtract = (a, b) => {return(a-b)};
multiply = (a, b) => {return(a*b)};
divide = (a, b) => {return(a/b)};
squareroot = (a) => {return(Math.sqrt(a))};
power = (a, b) => {return(a**b)};
// #endregion

solve = (a, operate, b) => {
    return(operate(a, b));
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let operatorSymbol = "";
let displayText = "";
let superText = "";
let box = "";

//#region number event listeners
zero.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "0";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "0";
        box.textContent = secondNumber;
    } else if (secondNumber.length < 6) {
        secondNumber += "0";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

one.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "1";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "1";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "1";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

two.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "2";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "2";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "2";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

three.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "3";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "3";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "3";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

four.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "4";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "4";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "4";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

five.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "5";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "5";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "5";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

six.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "6";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "6";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "6";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

seven.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "7";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "7";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "7";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

eight.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "8";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "8";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "8";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

nine.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "9";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "9";
        box.textContent = secondNumber;
    } else if (operator !== "" && secondNumber.length < 6) {
        secondNumber += "9";
        superBox.textContent = displayBox.textContent;
        displayBox.textContent = secondNumber;
    }
});

  //#endregion

//#region operators event listeners
addButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "") {
    operator = "add";
    operatorSymbol = "+";
    displayText = firstNumber + operatorSymbol;
    displayBox.textContent = displayText;
    }
});

subtractButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "") {
    operator = "subtract";
    operatorSymbol = "\u2212"
    displayText = firstNumber + operatorSymbol;
    displayBox.textContent = displayText;
    }
});

muliplyButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "") {
    operator = "multiply";
    operatorSymbol = "\u00D7";
    displayText = firstNumber + operatorSymbol;
    displayBox.textContent = displayText;
    }
});

divideButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "") {
    operator = "divide";
    operatorSymbol = "\u00F7";
    displayText = firstNumber + operatorSymbol;
    displayBox.textContent = displayText;
    }
});

powerButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "") {
    operator = "power";
    operatorSymbol = "\u2610";
    box = document.createElement("sup");
    displayBox.appendChild(box)
    box.textContent = operatorSymbol;
    }
});

squarerootButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "") {
    operator = "squareroot";
    operatorSymbol = "\u221A";
    displayText = operatorSymbol + "" + firstNumber + "";
    displayBox.textContent = displayText;
    }
});

acButton.addEventListener('click', e => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    operatorSymbol = "";
    displayText = "";
    displayBox.textContent = "";
    superBox.textContent = "";

})

//#endregion

equalsButton.addEventListener('click', e => {
 if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    superBox.textContent = firstNumber + operatorSymbol + secondNumber + "="
        if (operator == "add") {
            result = add(firstNumber, secondNumber);
        }   
        if (operator == "subtract") {
            result = subtract(firstNumber, secondNumber);
        }
        if (operator == "multiply") {
            result = multiply(firstNumber, secondNumber);
        }
        if (operator == "divide") {
            result = divide(firstNumber, secondNumber);
        }
        if (operator == "power") {
            result = power(firstNumber, secondNumber);
            superBox.textContent = "";
            const first = document.createTextNode(firstNumber);
            const second = document.createTextNode("=");
            const metasuper = document.createElement("sup");
            metasuper.textContent = secondNumber;
            superBox.appendChild(first);
            superBox.appendChild(metasuper);
            superBox.appendChild(second);
        } 
        displayBox.textContent = result;
 }
if (firstNumber !== "" && operator == "squareroot") {
 result = squareroot(firstNumber);
 displayText = result;
 displayBox.textContent = displayText;
 superBox.textContent = operatorSymbol + firstNumber + "=";
}
});
