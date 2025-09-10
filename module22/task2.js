let arr = [5,6,11,12,98, 5];

let find = 5;

function findCount(arr, find) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            count++;
        }
    }
    return count;
}

console.log(findCount(arr, find));

find = 25;

console.log(findCount(arr, find));
