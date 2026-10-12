const pascal = function (n) {
	if (n === 1) {
		return [1];
	}

	const previousRow = pascal(n - 1);
	const row = [1];

	for (let i = 1; i < previousRow.length; i++) {
		row.push(previousRow[i - 1] + previousRow[i]);
	}

	row.push(1);

	return row;
};

// Do not edit below this line
module.exports = pascal;
