const r = /ab+c/;

console.log(r.test("abbbbc")); // true と表示される
console.log(r.test("Hello, abc world!")); // true と表示される
console.log(r.test("ABC")); // false と表示される
console.log(r.test("こんにちは")); // false と表示される