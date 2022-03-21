// setup variables and get a calculator instance
function CreateCalculator() {
    let numberOne = document.getElementById("first").value;
    let numberTwo = document.getElementById("second").value; 
    let operator = getOperator();
    let calculator = new Calculator(numberOne, numberTwo, operator);
    console.log(calculator.operator);
}

// perform a calculation when the operator button is clicked
function calculate() {
    let numberOne = Number(document.getElementById("first").value);
    let numberTwo = Number(document.getElementById("second").value);
    let radioButton = document.getElementsByName("option");
    let operator;
    for(i=0; i < radioButton.length; i++) {
        if(radioButton[i].checked) {
            operator = radioButton[i].getAttribute("id");
        }
    }

    console.log(operator);
    if(operator === "add") {
        let sum = numberOne + numberTwo;
        updateResultText(sum);
    }
    if(operator === "subtract")
        updateResultText(numberOne - numberTwo);
    if(operator === "multiply") {
        console.log(10 * 153);
        let product = numberOne * numberTwo;
        updateResultText(product);
    }
    if(operator === "divid") {
        let division = numberOne / numberTwo;
        updateResultText(division);
    }
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {

    let operator;
    let radioButton = document.getElementsByName("option");
    for(i=0; i < radioButton.length; i++) {
        if(radioButton[i].checked) {
            operator = radioButton[i].getAttribute("id");
        }
    }
    let numberOne = document.getElementById("first").value;
    let numberTwo = document.getElementById("second").value;
    document.getElementById("result-text").innerHTML = ("The result of " + operator + "ing " + numberOne + " and " + numberTwo + " is " + value);
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("second").value="";
    document.getElementById("first").value="";
    document.getElementById("first").focus();
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    let radioButton = document.getElementsByName("option");
    for(i=0; i < radioButton.length; i++) {
        if(radioButton[i].checked) {
            return radioButton[i].getAttribute("id");           
        }
    }
}

