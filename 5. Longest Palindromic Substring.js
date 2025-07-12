/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let ret = "";

	if (s.length === 0) {
		return "";
	}

	if (s.length === 1) {
		return s;
	}

	for (let i = 0; i < s.length; i++) {
		let temp = "";
		for (let j = i; j < s.length; j++) {
			if (isPalindrome(s.substring(i, j + 1))) {
				temp = s.substring(i, j + 1);
			}
		}

		if (ret.length < temp.length) {
			ret = temp;
		}
	}

	return ret;
};

var isPalindrome = function (s) {
	const len = s.length;

	for (let i = 0; i < len / 2; i++) {
		if (s[i] !== s[len - 1 - i]) {
			return false;
		}
	}

	return true;
};
