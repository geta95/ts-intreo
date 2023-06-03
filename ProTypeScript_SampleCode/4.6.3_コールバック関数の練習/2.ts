const data = [1, -3, -2, 8, 0, -1];

const result: boolean[] = map(data, (x) => x >= 0);
// [true, false, false, true, true, false] と表示される
console.log(result);