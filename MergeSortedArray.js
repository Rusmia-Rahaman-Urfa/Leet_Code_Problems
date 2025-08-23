/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let midx = m - 1;
    let nidx = n - 1;
    let right = m + n - 1;

    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx];
            midx--;
        } else {
            nums1[right] = nums2[nidx];
            nidx--;
        }
        right--;
    }    
};

// Example usage to get results
let nums1 = [1, 2, 3, 0, 0, 0];
let m1 = 3;
let nums2 = [2, 5, 6];
let n1 = 3;

merge(nums1, m1, nums2, n1);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

let nums3 = [1];
let m2 = 1;
let nums4 = [];
let n2 = 0;

merge(nums3, m2, nums4, n2);
console.log(nums3); // Output: [1]

let nums5 = [0];
let m3 = 0;
let nums6 = [1];
let n3 = 1;

merge(nums5, m3, nums6, n3);
console.log(nums5); // Output: [1]