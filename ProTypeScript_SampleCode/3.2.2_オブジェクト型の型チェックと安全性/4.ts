const obj = {
  foo: 123,
  bar: "Hello, world!",
};
// エラー: Property 'hoge' does not exist on type '{ foo: number; bar: string; }'.
console.log(obj.hoge);