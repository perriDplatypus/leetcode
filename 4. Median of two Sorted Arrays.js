/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	let m = 0;
	let n = 0;
	let arr = [];

	while (m < nums1.length && n < nums2.length) {
		if (nums1[m] <= nums2[n]) {
			arr.push(nums1[m]);
			m++;
		} else {
			arr.push(nums2[n]);
			n++;
		}
	}

	while (m < nums1.length) {
		arr.push(nums1[m]);
		m++;
	}

	while (n < nums2.length) {
		arr.push(nums2[n]);
		n++;
	}

	if (arr.length % 2 === 0) {
		return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
	} else {
		return arr[Math.floor(arr.length / 2)];
	}
};
