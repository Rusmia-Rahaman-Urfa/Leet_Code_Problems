const isPowerOfFour = n => n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;


console.log(isPowerOfFour(16));    // true  (4^2)
console.log(isPowerOfFour(5));    // false  
console.log(isPowerOfFour(1));   // true  (4^1)
console.log(isPowerOfFour(64));   // true  (4^3)
console.log(isPowerOfFour(8));    // false (8 is 2^3, not 4^k)
console.log(isPowerOfFour(0));    // false
console.log(isPowerOfFour(-4));   // false
