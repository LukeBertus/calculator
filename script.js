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
const backButton = document.querySelector('#back')
const decimalButton = document.querySelector('#decimal')

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


title.style.cssText = `margin: ${0.02*calculatorHeight}px; font-size: ${0.09*calculatorHeight}px`;
display.style.cssText = `padding: 0px ${0.015*calculatorHeight}px; font-size: ${0.12*calculatorHeight}px`;
//#endregion

// #region Computations
add = (a, b) => {return(parseFloat(a)+parseFloat(b))};
subtract = (a, b) => {return(a-b)};
multiply = (a, b) => {return(a*b)};
divide = (a, b) => {return(a/b)};
squareroot = (a) => {return(Math.sqrt(a))};
power = (a, b) => {return(a**b)};
// #endregion

round = num => {
    if (num<999999 && num>-999999 && num.toString().length>6) {
        let array = num.toString().split("");
        if (array.includes(".")) {
            let pos = array.indexOf(".")
            let rounded = Number(num.toFixed(6-pos))
            return(rounded);
        }
            
    }
    else if (num>999999 || num<-999999) return(num.toExponential(0));
    else return(num)
    
}

console.log(round(2457498327))




let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let operatorSymbol = "";
let displayText = "";
let superText = "";
let box = "";
let temp = "";
let decimalCount = 0;

//#region number event listeners
zero.addEventListener('click', e => {
    if (operator == "" && firstNumber.length < 6) {
        firstNumber += "0";
        displayBox.textContent = firstNumber;
    } else if (operator == "power") {
        secondNumber += "0";
        box.textContent = secondNumber;
    } else if (secondNumber.length < 6 && result == "") {
        secondNumber += "0";
        superBox.textContent = firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "1";
        superBox.textContent = firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "2";
        superBox.textContent = firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "3";
        superBox.textContent =  firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "4";
        superBox.textContent =  firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "5";
        superBox.textContent =  firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "6";
        superBox.textContent =  firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "7";
        superBox.textContent =  firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "8";
        superBox.textContent =  firstNumber + operatorSymbol 
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
    } else if (operator !== "" && secondNumber.length < 6 && result == "") {
        secondNumber += "9";
        superBox.textContent =  firstNumber + operatorSymbol 
        displayBox.textContent = secondNumber;
    }
});

  //#endregion

//#region operators event listeners
addButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "" || result !== "") {
        decimalCount--;
        parseFloat(firstNumber);
        if (result !=="") {
            firstNumber = result;
            result = "";
            secondNumber = "";
            superBox.textContent = "";
        }
    operator = "add";
    operatorSymbol = "+";
    displayText = round(firstNumber) + operatorSymbol;
    displayBox.textContent = displayText;
    }
  

});

subtractButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "" || result !== "") {
        decimalCount--;
        if (result !=="") {
            firstNumber = result;
            result = "";
            secondNumber = "";
            superBox.textContent = "";
        }
    operator = "subtract";
    operatorSymbol = "\u2212"
    displayText = round(firstNumber) + operatorSymbol;
    displayBox.textContent = displayText;
    }
});

muliplyButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "" || result !== "") {
        decimalCount--;
        if (result !=="") {
            firstNumber = result;
            result = "";
            secondNumber = "";
            superBox.textContent = "";
        }
    operator = "multiply";
    operatorSymbol = "\u00D7";
    displayText = round(firstNumber) + operatorSymbol;
    displayBox.textContent = displayText;
    }
});

divideButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "" || result !== "") {
        decimalCount--;
        if (result !=="") {
            firstNumber = result;
            result = "";
            secondNumber = "";
            superBox.textContent = "";
        }
    operator = "divide";
    operatorSymbol = "\u00F7";
    displayText = round(firstNumber) + operatorSymbol;
    displayBox.textContent = displayText;
    }
});

powerButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "" || result !== "") {
        decimalCount--;
        if (result !=="") {
            firstNumber = result;
            result = "";
            secondNumber = "";
            superBox.textContent = "";
        }
    operator = "power";
    operatorSymbol = "\u2610";
    box = document.createElement("sup");
    displayBox.appendChild(box);
    box.textContent = operatorSymbol;
    }
});

squarerootButton.addEventListener('click', e => {
    if (operator == "" && firstNumber !== "" || result !== "") {
        if (result !=="") {
            firstNumber = result;
            result = "";
            secondNumber = "";
            superBox.textContent = "";
        }
    operator = "squareroot";
    operatorSymbol = "\u221A";
    displayText = operatorSymbol + "" + round(firstNumber) + "";
    displayBox.textContent = displayText;
    }
});
//#endregion

//#region bottom row event listeners

acButton.addEventListener('click', e => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    operatorSymbol = "";
    displayText = "";
    displayBox.textContent = "";
    superBox.textContent = "";
    decimalCount = 0;
})

backButton.addEventListener('click', e => {
    if (operator == "" && secondNumber == "") {
        let temp = firstNumber.toString();
        firstNumber = temp.slice(0, -1);
        displayBox.textContent = firstNumber;
    }
    else if (operator !== "" && secondNumber == "") {
        operator = "";
        operatorSymbol = "";
        displayBox.textContent = firstNumber;
        superBox.textContent = "";
    }
    else if (operator !== "" && secondNumber !== "" && result == "") {
        let temp = secondNumber.toString();
        secondNumber = temp.slice(0, -1);
        displayBox.textContent = secondNumber;
    }
    else if (result !== "") {
        result = "";
        displayBox.textContent = secondNumber;
        superBox.textContent = firstNumber + operatorSymbol;
    }
});




equalsButton.addEventListener('click', e => {
 if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    if (result !== "") temp = result;
    else temp = firstNumber;
    superBox.textContent = round(temp) + operatorSymbol + secondNumber + "="
        if (operator == "add") {
            result = add(temp, secondNumber);
        }   
        if (operator == "subtract") {
            result = subtract(temp, secondNumber);
        }
        if (operator == "multiply") {
            result = multiply(temp, secondNumber);
        }
        if (operator == "divide") {
            result = divide(temp, secondNumber);
        }
        if (operator == "power") {
            result = power(temp, secondNumber);
            superBox.textContent = "";
            const first = document.createTextNode(round(temp));
            const second = document.createTextNode("=");
            const metasuper = document.createElement("sup");
            metasuper.textContent = secondNumber;
            superBox.appendChild(first);
            superBox.appendChild(metasuper);
            superBox.appendChild(second);
        } 
        displayBox.textContent = round(result);
        
 }
 if (operator == "squareroot") {
    if (result !== "") temp = result;
    else temp = firstNumber;
    result = squareroot(temp);
    console.log(temp)
    displayText = round(result);
    displayBox.textContent = displayText;
    superBox.textContent = operatorSymbol + round(temp) + "=";
    }
 if (result !== "") {

 }
});

decimalButton.addEventListener('click', e => {
    if (operator == "" && decimalCount == 0) {
        firstNumber += ".";
        decimalCount++;
        displayBox.textContent = firstNumber;
        console.log(firstNumber)
    }
    if (operator !== "" && decimalCount ==0) {
        secondNumber += ".";
        decimalCount++;
        displayBox.textContent = secondNumber;

    }
})
//#endregion