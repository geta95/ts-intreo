const foo = { num: 1234 };
const bar = foo;
const baz = { num: 1234 };

console.log(foo === bar); // true と表示される
console.log(foo === baz); // false と表示される