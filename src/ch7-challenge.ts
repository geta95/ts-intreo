import { readFileSync } from "fs";

const text = readFileSync("uhyo.txt", { encoding: "utf8" });

console.log(text);
console.log(text.indexOf("uhyo"));
console.log(text[10]);
console.log(text[11]);
console.log(text[12]);
console.log(text[13]);
console.log(text[14]);
console.log(text[15]);