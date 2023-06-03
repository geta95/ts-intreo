// #1
const message = "Hello World!";
console.log(message);
// #2
const greeting = "Hello, ";
const target = greeting;
console.log(greeting + target);
// #3 let
let aisatu = "Hello, ";
let aite = aisatu;
aisatu = "Konnichiwa!";
console.log(aite);
// #4
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('文字列を入力してください:', (line) => {
    console.log(`${line + 1000}が入力されました`);
    rl.close();
});
// #5
const rl2 = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl2.question('文字列を入力してください:', (line2) => {
    const num = Number(line2);
    console.log(`${num + 1000}が入力されました`);
    rl.close();
});
