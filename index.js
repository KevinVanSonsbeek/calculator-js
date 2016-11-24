// Variables used in Calculator

var variabelen = {
	firstDigit: 0,
	secondDigit: 0,
	operator: 0,
	answer: 0,
	dot: false,
	calcHistory: ""
}
	//Shortening the document.get

function get(id){
	return document.getElementById(id);
}
	//Clear complete Calculator!

function clearVariables(){
	variabelen.firstDigit = "";
	variabelen.secondDigit = "";
	variabelen.operator = "";
	variabelen.answer = "";
	variabelen.calcHistory = "";
	variabelen.dot = false;
	get('answer').innerHTML = "0";
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
		console.log(variabelen.firstDigit);
		variabelen.calcHistory = variabelen.firstDigit;
		get('answer').innerHTML = variabelen.calcHistory;
	}	else{
		if(variabelen.secondDigit == ""){
			variabelen.secondDigit = digit;
		}	else{
			variabelen.secondDigit = variabelen.secondDigit + digit;
		}
		console.log(variabelen.secondDigit);
		variabelen.calcHistory = variabelen.firstDigit + variabelen.operator + variabelen.secondDigit;
		get('answer').innerHTML = variabelen.calcHistory;
	}
}
	//Setting Operator
function setOperator(operatorinput){
	if (variabelen.operator == 0){
		variabelen.operator = operatorinput;
	}	else {
		makeCalculation();
		variabelen.operator = operatorinput;
	}
	console.log(variabelen.operator);
	variabelen.calcHistory = variabelen.firstDigit + variabelen.operator;
	get('answer').innerHTML = variabelen.calcHistory;
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
}

	//Make the Calculation
function makeCalculation(){
	variabelen.firstDigit = parseFloat(variabelen.firstDigit);
	variabelen.secondDigit = parseFloat(variabelen.secondDigit);
	console.log("First Digit: " + variabelen.firstDigit + " Operator selected: " + variabelen.operator + " Second Digit: " + variabelen.secondDigit);
	if (variabelen.operator == '*') {
		if (variabelen.dot == true) {
			variabelen.answer = (variabelen.firstDigit *1000) * (variabelen.secondDigit *1000);
			variabelen.answer = variabelen.answer /1000000;
		}else {
			variabelen.answer = variabelen.firstDigit * variabelen.secondDigit;
		}
	}else if (variabelen.operator == '/') {
		if( variabelen.dot == true){
			variabelen.answer = (variabelen.firstDigit * 1000) / (variabelen.secondDigit * 1000);
			variabelen.answer = variabelen.answer / 1;
		}else {
			variabelen.answer = variabelen.firstDigit / variabelen.secondDigit;
		}
	}else if (variabelen.operator == '+') {
		if(variabelen.dot == true){
			variabelen.answer = (variabelen.firstDigit * 1000) + (variabelen.secondDigit * 1000);
			variabelen.answer = variabelen.answer / 1000;
		}	else {
			variabelen.answer = variabelen.firstDigit + variabelen.secondDigit;
		}
	}else if (variabelen.operator == '-') {
		if(variabelen.dot == true){
			variabelen.answer = (variabelen.firstDigit * 1000) - (variabelen.secondDigit * 1000);
			variabelen.answer = variabelen.answer / 1000;
		}else {
			variabelen.answer = variabelen.firstDigit - variabelen.secondDigit;
		}
	}
	console.log(variabelen.answer);
	get('answer').innerHTML = variabelen.answer;
	variabelen.firstDigit = variabelen.answer;
	variabelen.operator = 0;
	variabelen.secondDigit = 0;
}

function showVariables(){
	console.log(variabelen);
}