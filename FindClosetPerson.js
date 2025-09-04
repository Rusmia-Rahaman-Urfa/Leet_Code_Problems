var findClosest = function (x, y, z) {
    const dxz = Math.abs(x - z);
    const dyz = Math.abs(y - z);

    if (dxz < dyz) {
        return 1;
    } else if (dxz > dyz) {
        return 2;
    } else {
        return 0;
    }
};

// Example usage to get outputs
console.log(findClosest(2, 7, 4)); // Output: 1 (person 1 is closer to person 3 )
console.log(findClosest(2, 5, 6)); // Output: 2 (P2 is closer to person 3)
console.log(findClosest(1, 5, 3)); // Output: 0 (P1 and p2 both are closer to person 3)