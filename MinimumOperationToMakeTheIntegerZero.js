/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
    let k = 1;
    while (true) {
        let x = BigInt(num1) - BigInt(num2) * BigInt(k);
        if (x < BigInt(k)) {
            return -1;
        }
        if (k >= bitCount(x)) {
            return k;
        }
        k++;
    }
};

function bitCount(n) {
    let count = 0;
    while (n !== 0n) {
        count++;
        n &= n - 1n;
    }
    return count;
}

// Example usage to get outputs
console.log(makeTheIntegerZero(3, -2)); // Output: 3
console.log(makeTheIntegerZero(5, 7));  // Output: -1
