let str = "Hello, World!";

function countVowels(str) {
    let count = 0;
    let lowerStr = str.toLowerCase();
    let vowels = "aeiou";
    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels(str));