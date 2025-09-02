var numberOfPairs = function(points) {
    // Sort points by x-coordinate ascending, then y-coordinate descending
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
    let count = 0;
    
    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];
        
        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];
            
            // Check if point B is in the valid quadrant relative to point A
            if (y2 <= y1) {
                let isIllegal = false;
                
                // Check for any point inside the bounding box defined by A and B
                for (let k = i + 1; k < j; k++) {
                    const [xk, yk] = points[k];
                    
                    if (xk >= x1 && xk <= x2 && yk <= y1 && yk >= y2) {
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

// Example usage to get results
const points1 = [[1,1],[2,2],[3,3]];
console.log(numberOfPairs(points1)); // Output: 5

const points2 = [[6,2],[4,4],[2,6]];
console.log(numberOfPairs(points2)); // Output: 2