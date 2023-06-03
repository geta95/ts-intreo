const obj = { foo: null };

const { foo = 123 } = obj;
console.log(foo); // null が表示される