//creating empty numbers list array to store values that the user will input
let numbersList = [];

//append function to append values to the list
function append(inputValue){
    numbersList.push(inputValue);
    updateDisplay();
}

//similar to the append function, but not allowing user to input an operator if last value was an operator
function operation(inputOperation){
    if(numbersList.length >= 1 && !isNaN(numbersList[numbersList.length-1])){
        append(inputOperation);
        updateDisplay();
    }
    else {
        alert("You cannot enter that value.");
    }
}

//simple function to reset the array and emptying the calculator
function clearCalculator(){
    numbersList.length = 0;
    updateDisplay();
}

//updates the display everytime it is called to show latest value of numberslist
function updateDisplay(){
    document.getElementById("textField").value = numbersList.join("");
}

//trys evaluating the expression by using eval() on the numbers list and appending the result as a string in the array.
//if error happens (user's last value was operator for example) an alert pops up
//otherwise update the display
function evaluateExpression(){
    try {
        const result = eval(numbersList.join(''));
        clearCalculator();
        numbersList.push(result.toString());
        updateDisplay();
    } catch (e) {
        alert("Invalid expression!");
    }
}