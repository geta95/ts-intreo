const sum = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for (const num of args) {
    result += num;
  }
  return result;
}

console.log(sum(1, 10, 100)); // 1110 と表示される
console.log(sum(123, 456));   // 123456 と表示される
// エラー: Expected at least 1 arguments, but got 0.
console.log(sum());