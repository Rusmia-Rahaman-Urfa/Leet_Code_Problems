/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let cnt = 0, streak = 0;
    for (let num of nums) {
        if (num === 0) {
            streak++;
            cnt += streak;
        } else {
            streak = 0;
        }
    }
    return cnt;
};

// Example usage to get results
let nums1 = [1, 3, 0, 0, 2, 0, 0, 4];
console.log(zeroFilledSubarray(nums1)); // Output: 6

let nums2 = [0, 0, 0, 2, 0, 0];
console.log(zeroFilledSubarray(nums2)); // Output: 9

let num3 = [2,10,2019]
console.log(zeroFilledSubarray(num3)); // Output: 0