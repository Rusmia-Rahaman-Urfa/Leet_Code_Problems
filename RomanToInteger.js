var romanToInt = function(s) {
    const romanValues = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100, D: 500, M: 1000
    };

    let result = 0, prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanValues[s[i]];
        if (currValue < prevValue) {
            result -= currValue;
        } else {
            result += currValue;
        }
        prevValue = currValue;
    }

    return result;
};

console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994
