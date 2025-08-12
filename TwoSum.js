var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  // Return an empty array if no solution is found
  return [];
};

// Example usage:
const numbers = [2, 7, 11, 15];
const targetValue = 9;
const result = twoSum(numbers, targetValue);

// Print the result to the console
console.log(result); // Expected output: [0, 1]