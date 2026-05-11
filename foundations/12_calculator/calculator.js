const add = function (num1, num2) {
	return num1 + num2;
};

add(0, 0);
add(2, 2);
add(5, 24);

const subtract = function (num1, num2) {
	return num1 - num2;
};

subtract(10, 4);
subtract(-10, -4);
subtract(-8, 5);

const sum = function (arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);

const multiply = function (arr) {
	return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);

const power = function (base, exponent) {
	return base ** exponent;
};

power(4, 3);
power(3, 10);

const factorial = function (n) {
	let res = 1;
	for (let i = 1; i <= n; i++) {
		res *= i;
	}
	return res;
};

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
