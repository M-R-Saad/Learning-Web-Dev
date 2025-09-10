function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    let totalSleep = 0;
    for (let time of times) {
        totalSleep += time;
    }

    let time = {
        hour: Math.floor(totalSleep / 3600),
        minute: Math.floor((totalSleep % 3600) / 60),
        second: Math.floor((totalSleep % 3600) % 60),
    }

    return time;
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
console.log(calculateSleepTime("1000, 499, 519, 300"));
console.log(calculateSleepTime([3600, 1800, 1200]));
