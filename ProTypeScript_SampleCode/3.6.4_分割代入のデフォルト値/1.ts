type Obj = { foo?: number };
const obj1: Obj = {};
const obj2: Obj = { foo: -1234 };

// 変数fooには500が代入される
const { foo = 500 } = obj1;
console.log(foo);
// 変数barには-1234が代入される
const { foo: bar = 500 } = obj2;
console.log(bar);