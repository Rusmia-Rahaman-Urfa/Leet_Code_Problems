var minimumArea = function (grid) {
    const n = grid.length;
    const m = grid[0].length;
    let min_i = n;
    let max_i = 0;
    let min_j = m;
    let max_j = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                min_i = Math.min(min_i, i);
                max_i = Math.max(max_i, i);
                min_j = Math.min(min_j, j);
                max_j = Math.max(max_j, j);
            }
        }
    }

    // Handle the case where no '1's are present
    if (min_i === n) {
        return 0;
    }
    
    return (max_i - min_i + 1) * (max_j - min_j + 1);
};

// Example usage to get results
const grid1 = [
    [0, 1, 0],
    [1, 0, 1]
];
console.log(minimumArea(grid1)); // Output: 6

const grid2 = [
    [1, 0],
    [0, 0]
];
console.log(minimumArea(grid2)); // Output: 1