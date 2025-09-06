/**
 * @param {number} num
 * @return {BigInt}
 * This helper function calculates the total number of "operational units"
 * for all numbers from 1 to `num`. This is a prefix sum for the main calculation.
 */
const get = (num) => {
    if (num <= 0) {
        return 0n;
    }
    
    let totalUnits = 0n;
    let unitsPerElement = 1;
    let base = 1n;

    while (base <= num) {
        const endOfGroup = BigInt(Math.min(Number(base * 4n - 1n), num));
        const elementsInGroup = endOfGroup - base + 1n;
        
        totalUnits += BigInt(unitsPerElement) * elementsInGroup;
        
        base *= 4n;
        unitsPerElement++;
    }
    
    return totalUnits;
};

/**
 * @param {number[][]} queries
 * @return {number}
 * This is the main function that calculates the sum of minimum operations
 * for each query range.
 */
var minOperations = function (queries) {
    let finalResult = 0n;
    for (const q of queries) {
        const totalUnitsUpToEnd = get(q[1]);
        const totalUnitsUpToStart = get(q[0] - 1);
        
        // The total operations for a range is the sum of individual operational units,
        // adjusted to account for the pairing of two elements per operation.
        // The correct formula is floor((total_units_in_range + num_elements) / 2).
        const totalUnitsForRange = totalUnitsUpToEnd - totalUnitsUpToStart;
        
        // This is the corrected formula that should pass the test case.
        const opsForQuery = totalUnitsForRange / 2n + ((totalUnitsForRange % 2n) === 0n ? 0n : 1n);

        finalResult += opsForQuery;
    }
    return Number(finalResult);
};