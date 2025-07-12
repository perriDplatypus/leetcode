class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let sum = new ListNode();

	// A variable to keep a track of the current node
	let currentNode = sum;
	// A variable to keep track of any carries in the addition
	let carry = 0;

	while (l1 !== null || l2 !== null || carry !== 0) {
		// Add the values in a temp variable
		let temp = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;

		// If the sum of numbers exceeds 9 set a carry
		if (temp > 9) {
			carry = Math.floor(temp / 10);
			temp = temp % 10;
		}

		// Go to the next node of linked list
		l1 = l1 === null ? null : l1.next;
		l2 = l2 === null ? null : l2.next;

		// Update current node
		currentNode.next = new ListNode(temp);
		currentNode = currentNode.next;
	}

	return sum.next;
};
