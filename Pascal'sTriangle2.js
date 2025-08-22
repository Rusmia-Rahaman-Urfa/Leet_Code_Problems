/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }

    let prevRow = [1];

    for (let i = 1; i <= rowIndex; i++) {
        let currentRow = [1];
        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currentRow.push(1);
        prevRow = currentRow;
    }

    return prevRow;
};

// Example usage to get outputs
console.log(getRow(3)); // Output: [1, 3, 3, 1]
console.log(getRow(0)); // Output: [1]
console.log(getRow(1)); // Output: [1, 1]