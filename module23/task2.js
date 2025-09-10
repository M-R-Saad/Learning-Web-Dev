const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(heights) {
    let smallest = heights[0];
    for (let i = 1; i < heights.length; i++) {
        if (heights[i].length < smallest.length) {
            smallest = heights[i];
        }
    }
    return smallest;
}

console.log(smallestName(heights2)); 
