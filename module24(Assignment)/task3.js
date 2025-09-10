function willSuccess(numbers) {
    if (!Array.isArray(numbers)) {
        return "Invalid";
    }

    let failCount = 0;
    let passCount = 0;

    for (let number of numbers) {
        if (number < 50) {
            failCount++;
        }
        if (number >= 50) {
            passCount++;
        }
    }

    return passCount > failCount;
}

let numbers = [60, 70, 80, 40, 30];
console.log(willSuccess(numbers)); 

let numbers2 = [48 , 48 , 92 , 100 ];
console.log(willSuccess(numbers2)); 

console.log(willSuccess("Not an array"));