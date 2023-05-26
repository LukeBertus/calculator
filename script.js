// #region querySelectors
const title = document.querySelector("#title");
const calculator = document.querySelector("#calculator");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".buttons")
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")

const addButton = document.querySelector("#add")
const subtractButton = document.querySelector("#subtract")
const muliplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")
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
//sets calculator to 7:10 ratio
const  calculatorHeight = calculator.offsetHeight;
calculator.style.cssText = `width: ${0.61*calculatorHeight}px`;

//uses height of button seven to set the font to half the button container
const buttonHeight = seven.offsetHeight;
buttons.forEach(e => e.style.fontSize = `${buttonHeight/2}px`);
//#endregion

title.style.cssText = `margin: ${0.02*calculatorHeight}px; font-size: ${0.1*calculatorHeight}px`;

// #region Computations
add = (a, b) => {return(a+b)};
subtract = (a, b) => {return(a-b)};
multiply = (a, b) => {return(a*b)};
divide = (a, b) => {return(a/b)};
squareroot = (a) => {return(Math.sqrt(a))};
power = (a, b) => {return(a**b)};
// #endregion

console.log(power(10,3))