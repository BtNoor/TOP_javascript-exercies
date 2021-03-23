function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let value = 0;
	for (i = 0; i < a.length; i++) {
		value += a[i];
	}
	return value;
}

function multiply (a) {
	let value = a[0];
	for (i = 1; i < a.length; i++) {
		value = value * a[i];
	}
	return value;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(num) {
	if (num == 0 || num == 1) {
		return 1;
	} else {
		return num * factorial(num-1)
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}