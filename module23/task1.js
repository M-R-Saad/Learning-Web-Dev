const heights2 = [167, 190, 120, 165, 137];

function getTallest(heights) {
    let tallest = heights[0];
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > tallest) {
            tallest = heights[i];
        }
    }
    return tallest;
}

console.log(getTallest(heights2)); 