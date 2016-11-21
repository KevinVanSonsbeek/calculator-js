function get(id){
	return document.getElementById(id);
}
// Variables
var variables = {
	firstDigit: 0,
	secondDigit: 0,
	operator: 0,
	answer: "",
	displayhistory: 0
}	//Object
console.log(variables);
//Changing the Operators: * + - /
function setOperator(operator){
	variables.operator = operator;
	console.log(variables.operator);
}
//Input of the numbers, Before and after operator
function firstDigit(digit){
	if (variables.operator == 0){
		variables.firstDigit =  variables.firstDigit + digit;
	console.log(variables.firstDigit);
	} else if(variables.operator != 0){
		variables.secondDigit = variables.secondDigit + digit;
		console.log(variables.secondDigit);
	}
}
//Adding a dot to the number, for decimals
function dot(){
	if (variables.operator == 0) {
		variables.firstDigit = variables.firstDigit + ".";
	} else {
		variables.secondDigit = variables.secondDigit + ".";
	}
}
// Clearing the Calculator
function clearVariables(){
	variables.firstDigit = 0; 
	variables.secondDigit = 0;
	variables.operator = 0;
	variables.answer = "";
	console.log("Calculator cleared!");
	get('answer').innerHTML = "0";
}
//Make calculations according to Operator
function makeCalculation(){
	if(variables.operator == "+") {
		variables.answer = ((variables.firstDigit *10)/10) + ((variables.secondDigit *10)/10);
	} else if(variables.operator == "-" ){ 
		variables.answer = ((variables.firstDigit*10)/10) - ((variables.secondDigit*10)/10);
	} else if(variables.operator == "/"){
		variables.answer = ((variables.firstDigit*10)/10) / ((variables.secondDigit*10)/10);
	} else if(variables.operator == "*"){
		variables.answer = ((variables.firstDigit*10)/10) * ((variables.secondDigit*10)/10);
	}
	get('answer').innerHTML = variables.answer;
	console.log(variables.answer);
	variables.firstDigit = variables.answer;
	variables.secondDigit = 0;
	variables.operator = 0;
}


//test stuff
function showVariables(){
	console.log(variables);
}
