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
        if(this.operator.attribute("id") === "add-button")
            return this.add();
        if(this.operator.attribute("id") === "subtract-button")
           return this.subtract();
        if(this.operator.attribute("id") === "multiply-button")
           return this.multiply();
        if(this.operator.attribute("id") === "divide-button")
            return this.divide();
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
