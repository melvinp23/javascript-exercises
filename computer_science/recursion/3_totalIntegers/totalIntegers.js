const totalIntegers = function (data) {
	if (data === null || typeof data !== 'object') {
		return undefined;
	}

	let count = 0;

	for (const value of Object.values(data)) {
		if (Number.isInteger(value)) {
			count++;
		} else if (value !== null && typeof value === 'object') {
			count += totalIntegers(value);
		}
	}

	return count;
};

console.log(totalIntegers('2'));

// Do not edit below this line
module.exports = totalIntegers;
