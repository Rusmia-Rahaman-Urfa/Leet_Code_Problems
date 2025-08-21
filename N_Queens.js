/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const output = [];
    const nQueens = Array(n).fill().map(() => Array(n).fill('.'));
    const cols = new Set();
    const posDiag = new Set(); // r + c
    const negDiag = new Set(); // r - c

    function solve(row) {
        if (row === n) {
            output.push(nQueens.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }

            // Place Queen
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            nQueens[row][col] = 'Q';

            solve(row + 1);

            // Backtrack
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            nQueens[row][col] = '.';
        }
    }
    
    solve(0);
    return output;
};

// Example usage to get outputs for n = 4
console.log(solveNQueens(4));
/*
Output:
[
  [".Q..", "...Q", "Q...", "..Q."],
  ["..Q.", "Q...", "...Q", ".Q.."]
]
*/

console.log(solveNQueens(1)); // when n = 1 , output = [["Q"]]