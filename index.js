	// Variables used in Calculator
var variabelen = {
	firstDigit: 0,
	secondDigit: 0,
	operator: 0,
	answer: 0,
	dot: false,
	calcHistory: "",
	addCalcHistory: ""
}
	//Shortening the document.get
function get(id){
	return document.getElementById(id);
}
	//Clear complete Calculator!
function clearVariables(){
	variabelen.firstDigit = 0;
	variabelen.secondDigit = 0;
	variabelen.operator = 0;
	variabelen.answer = 0;
	variabelen.calcHistory = "";
	variabelen.addCalcHistory = "",
	variabelen.dot = false;
	get('answer').innerHTML = "0";
	get('addCalcHistory').innerHTML = "0";
	console.log('Calculator cleared!');
}	
	//Adding input numbers
function digits(digit){
	if(variabelen.operator ==0){
		if(variabelen.firstDigit == ""){
			variabelen.firstDigit = digit;
		}	else{
			variabelen.firstDigit= variabelen.firstDigit + digit;
		}
		variabelen.calcHistory = variabelen.firstDigit;
		get('answer').innerHTML = variabelen.calcHistory;
	}	else{
		if(variabelen.secondDigit == ""){
			variabelen.secondDigit = digit;
		}	else{
			variabelen.secondDigit = variabelen.secondDigit + digit;
		}
		variabelen.calcHistory = variabelen.firstDigit + variabelen.operator + variabelen.secondDigit;
		get('answer').innerHTML = variabelen.calcHistory;
	}
	variabelen.addCalcHistory = variabelen.addCalcHistory + digit;
	get('addCalcHistory').innerHTML = variabelen.addCalcHistory;
}
	//Setting Operator
function setOperator(operatorinput){
	if (variabelen.operator == 0){
		variabelen.operator = operatorinput;
	}	else {
		makeCalculation();
		variabelen.operator = operatorinput;
	}
	variabelen.calcHistory = variabelen.firstDigit + variabelen.operator;
	get('answer').innerHTML = variabelen.calcHistory;
	variabelen.addCalcHistory = variabelen.addCalcHistory + operatorinput;
	get('addCalcHistory').innerHTML = variabelen.addCalcHistory;
}
	//Adding decimals
function dot() {
	if (variabelen.operator == 0) {
		variabelen.firstDigit = variabelen.firstDigit + ".";
	variabelen.dot = true;
	}	else {
		variabelen.secondDigit = variabelen.secondDigit + ".";
	variabelen.dot = true;
	}
	variabelen.addCalcHistory = variabelen.addCalcHistory + ".";
	get('addCalcHistory').innerHTML = variabelen.addCalcHistory;
}
	//Make the Calculation
function makeCalculation(){
	variabelen.firstDigit = parseFloat(variabelen.firstDigit);
	variabelen.secondDigit = parseFloat(variabelen.secondDigit);
	//No first digit defined
	if(variabelen.firstDigit == 0){
		//No secondDigit system!
		if (variabelen.operator == '*') {
			variabelen.answer = 0;
		}		else if (variabelen.operator == '/') {
			variabelen.answer = 0;
		}		else if (variabelen.operator == '+') {
			variabelen.answer = variabelen.secondDigit;
		}		else if (variabelen.operator == '-') {
			variabelen.answer = -variabelen.secondDigit;
		}
	}//No second digit
	else if(variabelen.secondDigit ==0){
		if(variabelen.operator == '*'){
			variabelen.answer = variabelen.firstDigit * variabelen.firstDigit
		}		else if(variabelen.operator == '/'){
			variabelen.answer = variabelen.firstDigit / variabelen.firstDigit;
		}		else if(variabelen.operator == '+'){
			variabelen.answer = variabelen.firstDigit + variabelen.firstDigit;
		}		else if(variabelen.operator == '-'){
			variabelen.answer = variabelen.firstDigit - variabelen.firstDigit; 
		}
	}else{
		//If operator is *
		if (variabelen.operator == '*') {
			if (variabelen.dot == true) {
				variabelen.answer = (variabelen.firstDigit *1000) * (variabelen.secondDigit *1000);
				variabelen.answer = variabelen.answer /1000000;
			}else {
				variabelen.answer = variabelen.firstDigit * variabelen.secondDigit;
			}
		}//If operator is /
		else if (variabelen.operator == '/') {
			if( variabelen.dot == true){
				variabelen.answer = (variabelen.firstDigit * 1000) / (variabelen.secondDigit * 1000);
				variabelen.answer = variabelen.answer / 1;
			}else {
				variabelen.answer = variabelen.firstDigit / variabelen.secondDigit;
			}
		}//If operator is +
		else if (variabelen.operator == '+') {
			if(variabelen.dot == true){
				variabelen.answer = (variabelen.firstDigit * 1000) + (variabelen.secondDigit * 1000);
				variabelen.answer = variabelen.answer / 1000;
			}else {
				variabelen.answer = variabelen.firstDigit + variabelen.secondDigit;
			}
		}//If operator is -
		else if (variabelen.operator == '-') {
			if(variabelen.dot == true){
				variabelen.answer = (variabelen.firstDigit * 1000) - (variabelen.secondDigit * 1000);
				variabelen.answer = variabelen.answer / 1000;
			}else {
				variabelen.answer = variabelen.firstDigit - variabelen.secondDigit;
			}
		}
	}
	get('answer').innerHTML = variabelen.answer;
	variabelen.firstDigit = variabelen.answer;
	variabelen.operator = 0;
	variabelen.secondDigit = 0;
	variabelen.addCalcHistory = variabelen.addCalcHistory + "=";
	variabelen.addCalcHistory = variabelen.addCalcHistory + variabelen.answer;
}