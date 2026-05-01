const convertToCelsius = function (temp) {
	const convertedCelsius = (temp - 32) / 1.8;
	return Math.round(convertedCelsius * 10) / 10;
};

const convertToFahrenheit = function (temp) {
	const convertedFahrenheit = temp * 1.8 + 32;
	return Math.round(convertedFahrenheit * 10) / 10;
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
