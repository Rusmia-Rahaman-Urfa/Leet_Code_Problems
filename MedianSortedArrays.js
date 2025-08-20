/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findMedianSortedArrays = function (A, B) {
    var na = A.length;
    var nb = B.length;
    var n = na + nb;

    function solve(A, B, k, aStart, aEnd, bStart, bEnd) {
        if (aEnd < aStart) {
            return B[k - aStart];
        }
        if (bEnd < bStart) {
            return A[k - bStart];
        }

        var aIndex = Math.floor((aStart + aEnd) / 2);
        var bIndex = Math.floor((bStart + bEnd) / 2);
        var aValue = A[aIndex];
        var bValue = B[bIndex];

        if (aIndex + bIndex < k) {
            if (aValue > bValue) {
                return solve(A, B, k, aStart, aEnd, bIndex + 1, bEnd);
            } else {
                return solve(A, B, k, aIndex + 1, aEnd, bStart, bEnd);
            }
        } else {
            if (aValue > bValue) {
                return solve(A, B, k, aStart, aIndex - 1, bStart, bEnd);
            } else {
                return solve(A, B, k, aStart, aEnd, bStart, bIndex - 1);
            }
        }
    }

    if (n % 2 == 1) {
        return solve(A, B, Math.floor(n / 2), 0, na - 1, 0, nb - 1);
    } else {
        return (
            (solve(A, B, Math.floor(n / 2 - 1), 0, na - 1, 0, nb - 1) +
                solve(A, B, Math.floor(n / 2), 0, na - 1, 0, nb - 1)) /
            2.0
        );
    }
};

// Example usage to get results
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

let nums3 = [1, 2];
let nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5