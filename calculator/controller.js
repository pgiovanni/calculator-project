
// setup variables and get a calculator instance
function CreateCalculator() {
    let calculator = new Calculator(null, null, null);
    let numberOne = document.getElementById("first").value;
    let numberTwo = document.getElementById("second").value; 
    calculator.firstNumber = numberOne;
    calculator.secondNumber = numberTwo;
}

// perform a calculation when the operator button is clicked
function calculate() {
  calculator.add();        
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    
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
           return radioButton[i];           
        }
    }
}

