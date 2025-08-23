/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

// Example usage to get results
const colors1 = [2, 0, 2, 1, 1, 0];
sortColors(colors1);
console.log(colors1); // Output: [0, 0, 1, 1, 2, 2]

const colors2 = [2, 0, 1];
sortColors(colors2);
console.log(colors2); // Output: [0, 1, 2]