const obj = {
  foo: 123,
  bar: "Hello, world!",
};
// エラー: Type 'null' is not assignable to type 'number'.
obj.foo = null;