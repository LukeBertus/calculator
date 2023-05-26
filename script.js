//sets calculator to 7:10 ratio
const calculator = document.querySelector("#calculator");
const  calculatorHeight = calculator.offsetHeight;
calculator.style.cssText = `width: ${0.7*calculatorHeight}px`

//uses height of button seven to set the font to half the button container
const buttons = document.querySelectorAll(".buttons")
const seven = document.querySelector("#seven")
const buttonHeight = seven.offsetHeight;
buttons.forEach(e => e.style.fontSize = `${buttonHeight/2}px`);
