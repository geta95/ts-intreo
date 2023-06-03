type Obj = { foo?: number };
const obj1: Obj = {};
// fooの型はnumber型
const { foo = 500 } = obj1;