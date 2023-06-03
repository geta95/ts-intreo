const obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  // エラー: Type 'boolean' is not assignable to type 'string'.
  bar: true,
};