var maximum69Number = function(num) {
    return parseInt(num.toString().replace('6', '9'));
};

// Example usage to get output
let example1 = maximum69Number(9669);
console.log(example1); // Output: 9969

let example2 = maximum69Number(9996);
console.log(example2); // Output: 9999

let example3 = maximum69Number(9999);
console.log(example3); // Output: 9999