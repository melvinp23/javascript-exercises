const leapYears = function (year) {
	const isYearDivisibleByFourHundred = year % 400 === 0;
	const isYearDivisibleByFour = year % 4 === 0;
	const isCentury = year % 100 === 0;

	if (isYearDivisibleByFour && (isYearDivisibleByFourHundred || !isCentury)) {
		return true;
	} else return false;
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
