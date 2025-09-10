function calculateVAT(amount) {

    if (typeof amount !== 'number' || isNaN(amount)) {
        return 'Invalid';
    }
    if(amount < 0) {
        return 'Invalid';
    }

    return amount * 0.075;
}

console.log(calculateVAT(1500));
console.log(calculateVAT(-1500));
console.log(calculateVAT('1500'));