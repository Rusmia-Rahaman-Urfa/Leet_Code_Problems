/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
    let count = 0;

    // Sort points by x-coordinate (ascending), and then by y-coordinate (descending) for ties.
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];

        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];

            // A valid pair must have x1 <= x2 and y1 >= y2.
            // The sorting ensures x1 <= x2. We only need to check y1 >= y2.
            if (y2 <= y1) {
                let isIllegal = false;
                for (let k = i + 1; k < j; k++) {
                    const [xk, yk] = points[k];

                    // Check if a point k is strictly inside the rectangle defined by i and j.
                    // The sorting handles the x-bounds, so we only need to check the y-bounds.
                    if (yk <= y1 && yk >= y2) {
                        isIllegal = true;
                        break;
                    }
                }

                if (!isIllegal) {
                    count++;
                }
            }
        }
    }

    return count;
};

// Example usage to get outputs
const points1 = [[1, 1], [2, 2], [3, 3]];
console.log(numberOfPairs(points1)); // Output: 0

const points2 = [[6, 2], [4, 4], [2, 6]];
console.log(numberOfPairs(points2)); // Output: 2

const points3 = [[3, 1], [1, 3], [1, 1]];
console.log(numberOfPairs(points3)); // Output: 2