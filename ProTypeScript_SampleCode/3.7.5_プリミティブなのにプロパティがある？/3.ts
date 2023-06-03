// これらはOK
let val: {} = 123;
val = "foobar";
val = { num: 1234 };
// これはコンパイルエラー
val = null;
// これもコンパイルエラー
val = undefined;