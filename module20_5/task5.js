let arr = [1, 2, 3];
// let brr = [...arr];

let brr = [];

for (let num of arr) {
    brr.push(num);
}

brr[0] = 99;

console.log(arr);
console.log(brr);