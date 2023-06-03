const num: number = 0;
// 型Tはnumber型
type T = typeof num;
// fooはnumber型の変数となる
const foo: T = 123;