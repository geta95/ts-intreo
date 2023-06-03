const r = /^abc/;
console.log(r.test("abcdefg")); // true と表示される
console.log(r.test("Hello, abcdefg")); // false と表示される