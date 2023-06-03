type UnaryFunc = (arg: number) => number;
type BinaryFunc = (left: number, right: number) => number;

const double: UnaryFunc = arg => arg * 2;
const add: BinaryFunc = (left, right) => left + right;

// UnaryFuncをBinaryFuncとして扱うことができる
const bin: BinaryFunc = double;
// 20 が表示される
console.log(bin(10, 100));