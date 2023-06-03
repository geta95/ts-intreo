const obj1 = {
  foo: 123,
  bar: 456,
  baz: 789
};

// エラー: 'foo' is specified more than once, so this usage will be overwritten.
const obj2 = {
  foo: -9999,
  ...obj1
};