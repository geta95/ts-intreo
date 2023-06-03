const foo = { num: 1234 };
const bar = foo;
console.log(bar.num); // 1234 と表示される
bar.num = 0;
console.log(foo.num); // 0 と表示される