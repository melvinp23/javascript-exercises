const repeatString = function (string, num) {
	let result = '';

	for (let i = 0; i < num; i++) {
		result += string;
	}

	if (num < 0) {
		result = 'ERROR';
		return result;
	} else {
		return result;
	}
};

console.log(repeatString('', 10));

// Do not edit below this line
module.exports = repeatString;
