const palindromes = function (str) {
	let cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

	let reverseString = cleanString.split('').reverse().join('');

	return cleanString === reverseString;
};

console.log(palindromes('racecar!'));
console.log(palindromes('rac3e3car'));
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
