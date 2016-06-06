var displayString = '0';
var operator = '';
var x = 0.0;
var y = 0.0;
var total = 0.0;

var isMobile = false;

var main = function() {
	if($('#is-mobile').css('display') == 'none'){
		isMobile = true;
	} else {
		isMobile = false;
	}

		$('.1').on({'touchend' : function() {addToString('1')}});
		$('.2').on("touchend", function() {addToString('2')});
		$('.3').on('touchstart', function() {addToString('3')});
		$('.4').on("touchstart", function() {addToString('4')});
		$('.5').on("touchend", function(e) {addToString('5')});
		$('.6').on("touchstart", function(e) {addToString('6')});
		$('.7').on('touchend', function(e) {addToString('7')});
		$('.8').on('touchstart', function(e) {addToString('8')});
		$('.9').on("tap", function() {addToString('9')});
		$('.0').on('tap', function() {addToString('0')});
		$('.decimal').on("tap", function(e) {addToString('.')});

		$('.negative').on('tap', function(e) {makeNegative()});

		$('.add-btn').on("touchend", function() {operatorPress('+')});
		$('.subtract-btn').on("touchend", function() {operatorPress('-')});
		$('.divide-btn').on("touchend", function() {operatorPress('/')});
		$('.multiply-btn').on("touchend", function() {operatorPress('X')});

		$('.equals-btn').on("touchend", function() {equalsPressed()});
		$('.clear-btn').on("touchend", function() {clearNumber()});



		$('.1').click(function() {addToString('1')});
		$('.2').click(function() {addToString('2')});
		$('.3').click(function() {addToString('3')});
		$('.4').click(function() {addToString('4')});
		$('.5').click(function() {addToString('5')});
		$('.6').click(function() {addToString('6')});
		$('.7').click(function() {addToString('7')});
		$('.8').click(function() {addToString('8')});
		$('.9').click(function() {addToString('9')});
		$('.0').click(function() {addToString('0')});
		$('.decimal').click(function() {addToString('.')});

		$('.negative').click(function() {makeNegative()});

		$('.add-btn').click(function() {operatorPress('+')});
		$('.subtract-btn').click(function() {operatorPress('-')});
		$('.divide-btn').click(function() {operatorPress('/')});
		$('.multiply-btn').click(function() {operatorPress('X')});

		$('.equals-btn').click(function() {equalsPressed()});
		$('.clear-btn').click(function() {clearNumber()});

	displayToScreen();
}

var operatorPress = function(operator) {
	if(parseFloat(displayString) !== 0.0){
		x = parseFloat(displayString);
	}
	this.operator = operator; 
	displayString = '0';
	displayToScreen();
}

var equalsPressed = function() {
	if(parseFloat(displayString) !== 0) {
		y = parseFloat(displayString);
	}

	if(y !== 0.0)
	switch(operator) {
		case '+':
			total = myAdd(x,y);
			break;
		case '-':
			total = subtract(x,y);
			break;
		case 'X':
			total = multiply(x,y);
			break;
		case '/':
			total = divide(x,y);
			break;
		default:
			clearNumber();
			break;
	}
	showTotal();
}

var displayToScreen = function() {
	document.getElementById('screen').innerHTML = displayString;
}

var showTotal = function() {
	document.getElementById('screen').innerHTML = total;
	x = total;
	y = 0.0;
	displayString = '0';
	operator = '';
}

var makeNegative = function() {
	if(displayString.includes('-')) {
		displayString = displayString.substr(1, displayString.length - 1);
		displayToScreen();
	} else {
		if(displayString === '0') {

		} else {
			displayString = '-'.concat(displayString);
			displayToScreen();
		}
	}
}

var addToString = function(string) {
	if(displayString.includes('.') && string === '.') {
		displayString = displayString;
		displayToScreen();
	} else {
		if(displayString === '0') {
			if(string === '.') {
				displayString = '0.'
				displayToScreen();
			} else {
				displayString = string;
				displayToScreen();
			}
		} else {
			displayString = displayString.concat(string);
			displayToScreen();
		}
	}
}

var clearNumber = function() {
	displayString = '0';
	displayToScreen();
	x = 0.0;
	y = 0.0;
	operator = '';
}

var myAdd = function(x, y) {
	return x + y;
}

var subtract = function(x, y) {
	return x - y;
}

var multiply = function(x, y) {
	return x * y;
}

var divide = function(x, y) {
	return x / y;
}

$(document).ready(main);