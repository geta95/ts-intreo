import { readFile  } from "fs/promises";

const p = readFile("ch7-foo.txt", "utf8");
console.log("読み込み開始");

p.then((result) => {
    console.log("Success!", result);
});

p.catch((error: unknown) => {
    console.log("Failure", error);
});

p.finally(() => {
    console.log("処理が完了しました");
});
