const obj = {
  str: "hello, world!",
  num: 1234
};

const {
  // エラー: Property 'foo' does not exist on type '{ str: string; num: number; }'.
  foo
} = obj;