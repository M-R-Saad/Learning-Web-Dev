const a = isNaN('11');

// This will return false because '11' can be converted to a number!
console.log(a);

const b = isNaN(2 - 10);

// This will also return false as the result of the expression is a number!
console.log(b);