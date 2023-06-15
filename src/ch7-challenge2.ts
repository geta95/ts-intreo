import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

console.log(filePath);
console.log(fileDir);
console.log(dataFile);

const text = readFileSync("uhyo.txt", { encoding: "utf8" });

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
