/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }
    
    return dummy.next;
};

// Helper function to create a linked list from an array
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array for printing
function listToArray(head) {
    let arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// Example: Adding 342 and 465 to get 807
let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 4]);

let sumList1 = addTwoNumbers(l1, l2);
console.log(listToArray(sumList1)); // Output: [7, 0, 8]

let l3 = createList([0]);
let l4 = createList([0]);

let sumList2 = addTwoNumbers(l3, l4);
console.log(listToArray(sumList2)); // Output: [0]

let l5 = createList([9,9,9,9,9,9,9]);
let l6 = createList([9,9,9,9]);

let sumList3 = addTwoNumbers(l5, l6);
console.log(listToArray(sumList3)); // Output: [8,9,9,9,0,0,0,1]