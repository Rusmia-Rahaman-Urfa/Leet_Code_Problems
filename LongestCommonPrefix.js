/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let index = 1; index < strs.length; index++) {
        while (strs[index].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
};

// Example usage to get results
let strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

let strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""

let strs3 = ["interstellar", "internet", "international"];
console.log(longestCommonPrefix(strs3)); // Output: "inte"