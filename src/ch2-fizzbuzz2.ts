let ans: string = "";

for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        ans += "FizzBuzz ";
    } else if (i%3 === 0) {
        ans += "Fizz ";
    } else if (i%5 === 0) {
        ans += "Buzz ";
    } else {
        ans += `${i} `;
    }
}

console.log(ans);