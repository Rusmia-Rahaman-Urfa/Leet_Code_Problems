/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const valueSymbols = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let result = '';

    for (const [value, symbol] of valueSymbols) {
      if (num === 0) {
        break;
      }
      
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }

    return result;    
};

// Example usage to get output
console.log(intToRoman(3749));     // Output: "MMMDCCXLIX"
console.log(intToRoman(58));    // Output: "LVIII"
console.log(intToRoman(1994));  // Output: "MCMXCIV"