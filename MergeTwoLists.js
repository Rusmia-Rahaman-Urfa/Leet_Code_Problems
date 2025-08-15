
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

// Helper function to create a linked list from an array
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
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

// Example 1
let list1 = createList([1, 2, 4]);
let list2 = createList([1, 3, 4]);
let mergedList1 = mergeTwoLists(list1, list2);
console.log("Example 1 Output:", listToArray(mergedList1));

// Example 2
let list3 = createList([]);
let list4 = createList([]);
let mergedList2 = mergeTwoLists(list3, list4);
console.log("Example 2 Output:", listToArray(mergedList2));

// Example 3
let list5 = createList([]);
let list6 = createList([0]);
let mergedList3 = mergeTwoLists(list5, list6);
console.log("Example 3 Output:", listToArray(mergedList3));