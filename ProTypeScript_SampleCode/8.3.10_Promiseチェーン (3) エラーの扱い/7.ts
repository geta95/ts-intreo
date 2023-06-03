import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");

const p2 = p.then((result) => {
  console.log("成功", result);
});
const p3 = p2.catch((error) => {
  console.log("失敗", error);
});