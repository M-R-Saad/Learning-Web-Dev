let laptop = 35000;
let tablet = 15000;
let mobile = 20000;

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
    let totalLaptopCost = laptop * laptopQty;
    let totalTabletCost = tablet * tabletQty;
    let totalMobileCost = mobile * mobileQty;
    let totalCost = totalLaptopCost + totalTabletCost + totalMobileCost;
    return totalCost;
}

console.log(calculateElectronicsBudget(2, 3, 4)); 