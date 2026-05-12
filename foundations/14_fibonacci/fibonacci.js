// const fibonacci = function (n) {
// 	let fib = [0, 1];

// 	for (let i = 2; i < n; i++) {
// 		fib[i] = fib[i - 1] + fib[i - 2];
// 	}

// 	if (n < 0) {
// 		return 'OOPS';
// 	} else {
// 		return fib;
// 	}
// };

const fibonacci = function (n) {
	if (n <= 1 && n >= 0) return parseInt(n);
	if (n < 0) return 'OOPS';

	let fib = fibonacci(n - 1) + fibonacci(n - 2);
	return fib;
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
console.log(fibonacci('0'));
console.log(fibonacci('1'));
console.log(fibonacci('2'));
console.log(fibonacci('8'));

// Do not edit below this line
module.exports = fibonacci;
