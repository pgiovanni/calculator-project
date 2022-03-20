class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {
        return operator.getAttribute("label");
    }

    // perform a calculation based on the currently selected operation
    operate() {
        if(operator.getAttribute("id") === "add-button")
            return add();
        if(operator.getAttribute("id") === "subtract-button")
           return subtract();
        if(operator.getAttribute("id") === "multiply-button")
           return multiply();
        if(this.operator.getAttribute("id") === "divide-button")
            return divide();      
        
    }
    
    attemptedDivideByZero = false;

    // perform addition operation
    add() {
        return firstNumber + secondNumber;
    }

    // perform subtraction operation
    subtract() {
        return firstNumber - secondNumber;
    }

    // perform multiplication operation
    multiply() {
        return firstNumber * secondNumber;
    }

    // perform divide operation
    divide() {
        return firstNumber / secondNumber;
    }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
