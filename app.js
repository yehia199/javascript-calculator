let numbers = document.querySelectorAll('.nums');
let operators = document.querySelectorAll('.operators');
let equal = document.querySelector('#Equal-btn');
let output = document.querySelector('.output');
let calculations = document.querySelector('.calculations')
let Ac = document.querySelector('.AC');
let del = document.querySelector('.del'); 
let firstNumber = 0;
let secondNumber = 0;
let operatorType = '';
let isTheOperatorClicked = false;
let result = 0;

function displayNums() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (isTheOperatorClicked == false) {
                calculations.textContent += number.textContent;
                output.textContent += number.textContent;
                //console.log(Number(firstNumber))
                console.log(output)
                console.log(isTheOperatorClicked)
            } else if(isTheOperatorClicked == true) {
                calculations.textContent += number.textContent;
                output.textContent += number.textContent;
                secondNumber = calculations.textContent;
                console.log(Number(secondNumber))
                console.log(output)
                console.log(isTheOperatorClicked) 
            }
        })
    });
}
function clickingOperators() {
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (firstNumber > 0 && secondNumber > 0) {
                if (operatorType == '+') {
                    result = calculations.textContent = Number(firstNumber) + Number(secondNumber);
                    firstNumber = 0;
                    secondNumber = 0;
                    calculations.textContent = result;
                } else if(operatorType == '-') {
                    result = calculations.textContent = Number(firstNumber) - Number(secondNumber);
                    firstNumber = 0;
                    secondNumber = 0;
                    calculations.textContent = result;
                    
                } else if(operatorType == '*') {
                    result = calculations.textContent = Number(firstNumber) * Number(secondNumber);
                    firstNumber = 0;
                    secondNumber = 0;
                    calculations.textContent = result;
                } else if(operatorType == '/') {
                    result = calculations.textContent = Number(firstNumber) / Number(secondNumber);
                    firstNumber = 0;
                    secondNumber = 0;
                    calculations.textContent = result;
                } else if(operatorType == '%') {
                    result = calculations.textContent = Number(firstNumber) % Number(secondNumber);
                    firstNumber = 0;
                    secondNumber = 0;
                    calculations.textContent = result;
                }
                //if (calculations.textContent = result) {
                    
              //  }
            }
            firstNumber = Number(calculations.textContent);
            console.log(firstNumber)
            operatorType = operator.textContent;
            calculations.textContent = '';
            output.textContent += operator.textContent;
            console.log(operatorType);
            isTheOperatorClicked = true;
        })
    })
}

function operate() {
    equal.addEventListener('click', () => {
        if (operatorType == '+') {
            result = calculations.textContent = Number(firstNumber) + Number(secondNumber);
            secondNumber = 0;
            output.textContent = result;
        } else if(operatorType == '-') {
            result = calculations.textContent = Number(firstNumber) - Number(secondNumber);
            secondNumber = 0;
            output.textContent = result;
        } else if(operatorType == '*') {
            result = calculations.textContent = Number(firstNumber) * Number(secondNumber);
            secondNumber = 0;
            output.textContent = result;
        } else if(operatorType == '/') {
            result = calculations.textContent = Number(firstNumber) / Number(secondNumber);
            secondNumber = 0;
            output.textContent = result;
        } else if(operatorType == '%') {
            result = calculations.textContent = Number(firstNumber) % Number(secondNumber);
            secondNumber = 0;
            output.textContent = result;
        }
    })
}
displayNums()
clickingOperators()
operate()