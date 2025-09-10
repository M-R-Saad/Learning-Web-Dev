const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let revColors = [];

for (let color of colors) {
    revColors.unshift(color);
}

console.log(revColors);