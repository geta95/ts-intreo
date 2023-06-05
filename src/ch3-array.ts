const arr1 = [0, 1, 2];
const arr2 = [...arr1, 3, 4, 5];
console.log(arr1);
console.log(arr2);

arr1[1] = 10;
console.log(arr1);
console.log(arr2);

// 配列の型定義
const arr3: number[] = [123, 456, 789];
const arr4: Array<{name: string;}> = [
    {name: "Yammada-san"},
    {name: "Maeda-san"},
    {name: "Ota-san"}
];
const arr5: (string | number | boolean)[] = [100, "ramen", true];
const arr6: readonly number[] = [0, 1, 2];
arr1[100] = 100;

// 返り値は undefined
console.log(arr6[3]);
// こんなこともできてしまう、、、
console.log(arr1);
console.log(arr1[100]);

// for-of
for (const elm of arr4) {
    console.log(elm);
};

// 変数はletで宣言することも可能
for (let elm of arr2) {
    elm *= 10;
    console.log(elm);
};

// タプル型
// 要素数を超える位置にアクセスするとエラー
let tuple: [string, number] = ["foo", 0];

// Dateオブジェクト
const d = new Date();
console.log(d); 

// 正規表現（簡易版）
const r = /ab+c/;
console.log(r.test("abc"));
console.log(r.test("abbbbbc"));
console.log(r.test("ac"));
console.log(r.test("Hello, abc World"));
console.log(r.test("ABC"));
console.log(r.test("ab c"));

// 連想配列 Map
const map: Map<string, number> = new Map();
map.set("foo", 1234);
console.log(map);
console.log(map.get("foo"));
console.log(map.get("bar"));
