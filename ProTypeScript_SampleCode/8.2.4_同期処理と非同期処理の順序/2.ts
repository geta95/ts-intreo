import { readFile } from "fs";

readFile("foo.txt", "utf8", (err, result) => {
  console.log(result);
});
console.log("読み込み開始")