const removeFromArray = function (arr, ...args) {
	return arr.filter(val => !args.includes(val));
};

console.log(removeFromArray([1, 'ho', 2, 3], '1', 'ho'));

// Do not edit below this line
module.exports = removeFromArray;
