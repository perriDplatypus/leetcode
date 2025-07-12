/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// track the current start index
	let start = 0;

	for (let i = start + 1; i <= nums.length; i++) {
		for (let end = i; end <= nums.length; end++) {
			// Check if the sum is equal to the target
			if (nums[start] + nums[end] === target) {
				return [start, end];
			}
		}
		start++;
	}
};
