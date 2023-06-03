const obj = {
  foo: 123,
  bar: "string",
  baz: false,
};

const { foo, ...restObj } = obj;

console.log(foo); // 123 が表示される
console.log(restObj); // { bar: "string", baz: false } が表示される