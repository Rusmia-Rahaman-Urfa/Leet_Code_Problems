/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0, n = s.length, sign = 1, result = 0;
    const INT_MAX = 2**31 - 1;
    // Fix: use a standard way to represent the negative power
    const INT_MIN = -Math.pow(2, 31); 
    
    // 1. Skip whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }
    
    // 2. Determine the sign
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Parse digits
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
        
        // Handle overflow check *before* multiplying
        if (sign === 1 && (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7))) {
            return INT_MAX;
        }
        if (sign === -1 && (result > Math.floor(INT_MIN / -10) || (result === Math.floor(INT_MIN / -10) && digit > 8))) {
            return INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};

// Example usage
console.log(myAtoi("42")); // output: 42
console.log(myAtoi("   -042")); // output: -42
console.log(myAtoi("1337c0d3")); // output: 1337
console.log(myAtoi("0-1")); // output: 0
console.log(myAtoi("words with 987")); // output: 0