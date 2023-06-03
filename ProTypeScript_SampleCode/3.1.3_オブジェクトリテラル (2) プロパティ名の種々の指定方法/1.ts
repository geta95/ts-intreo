const obj = {
  foo: 123,
  "foo bar": -500,
  "↑↓↑↓": "",
};

console.log(obj.foo); // 123 と表示される
console.log(obj["foo bar"]); // -500 と表示される
