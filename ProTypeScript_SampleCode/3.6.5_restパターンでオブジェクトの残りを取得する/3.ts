const arr = [1, 1, 2, 3, 5, 8, 13];

const [first, second, third, ...rest] = arr;
console.log(first); // 1 が表示される
console.log(second); // 1 が表示される
console.log(third); // 2 が表示される
console.log(rest); // [3, 5, 8, 13] が表示される