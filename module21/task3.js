function make_avg(arr, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
}

console.log(make_avg([1, 2, 3, 4, 6], 5));