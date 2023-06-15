import { readFileSync } from "fs";

const text = readFileSync("uhyo.txt", { encoding: "utf8" });

// test code
console.log("========== This is test code. ==========");
console.log(text);
console.log(text.indexOf("uhyo"));
console.log(text.indexOf("uhyo", 12));
console.log(text[10]);
console.log(text[11]);
console.log(text[12]);
console.log(text[13]);
console.log(text[14]);
console.log(text[15]);
console.log("========== This is test code. ==========");

let count = 0;
let currentIndex = 0;

while (true) {
    const nextIndex = text.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
        count++;
        currentIndex = nextIndex + 1;
    } else {
        break
    }
}

console.log(count);

export {};
