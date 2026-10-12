function getPermutations(arr) {
	if (arr.length === 0) {
		return [[]];
	}

	const result = [];

	for (let i = 0; i < arr.length; i++) {
		const remaining = arr.filter((_, index) => index !== i);
		const permutations = getPermutations(remaining);

		for (const permutation of permutations) {
			result.push([arr[i], ...permutation]);
		}
	}

	return result;
}

console.log(getPermutations([[1]]));

// Do not edit below this line
module.exports = getPermutations;
