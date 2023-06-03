const arr = [1, 2, 4, 8, 16, 32];

const [, foo, , bar, , baz] = arr;
console.log(foo); // 2 が表示される
console.log(bar); // 8 が表示される
console.log(baz); // 32 が表示される