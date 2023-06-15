import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime = performance.now();
console.log("計測開始");

readFile("ch7-foo.txt", "utf8", (err, result) => {
    const endTime = performance.now();
    console.log(`${endTime - startTime}msかかりました`);
    console.log("計測終了");
});

console.log("計測終了（仮）");
