// FooBarObjを宣言する前に使ってもOK
const obj: FooBarObj = {
  foo: 123,
  bar: "Hello, world!"
};
type FooBarObj = {
  foo: number;
  bar: string;
};