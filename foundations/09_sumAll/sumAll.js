const sumAll = function (start, end) {
	if (start < 0 || end < 0) return 'ERROR';
	if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';

	let sum = 0;
	if (start < end) {
		for (let i = start; i <= end; i++) {
			sum = sum + i;
		}

		return sum;
	} else {
		for (let i = end; i <= start; i++) {
			sum = sum + i;
		}

		return sum;
	}
};

console.log(sumAll(1, [90, 1]));

// Do not edit below this line
module.exports = sumAll;

/*
Array.from(
  { length: finish - start },
  (_, i) => start + 1 + i
)
*/
