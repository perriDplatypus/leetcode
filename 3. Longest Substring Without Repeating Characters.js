/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s.length === 0) {
		return 0;
	}

	let maxLen = 1;
	for (let i = 0; i < s.length; i++) {
		let len = 1;
		let charMap = new Map();
		let broken = false;

		charMap.set(s[i], i);

		for (let j = i + 1; j < s.length; j++) {
			if (charMap.has(s[j])) {
				if (maxLen < len) {
					broken = true;
					maxLen = len;
				}
				break;
			}

			len++;
			charMap.set(s[j], j);
		}
		if (!broken) {
			if (maxLen < len) {
				maxLen = len;
			}
		}
	}

	return maxLen;
};