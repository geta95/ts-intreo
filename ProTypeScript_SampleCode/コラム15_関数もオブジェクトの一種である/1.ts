function foo(): void {}
const bar = (): void => {};

console.log(foo.name); // "foo" と表示される
console.log(bar.name); // "bar" と表示される