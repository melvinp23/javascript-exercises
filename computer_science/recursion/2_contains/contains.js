const contains = function (obj, target) {
	for (const value of Object.values(obj)) {
		if (value === target || (Number.isNaN(value) && Number.isNaN(target))) {
			return true;
		}

		if (value !== null && typeof value === 'object') {
			if (contains(value, target)) {
				return true;
			}
		}

		if (value === NaN) {
			return true;
		}
	}

	return false;
};

// Do not edit below this line
module.exports = contains;
