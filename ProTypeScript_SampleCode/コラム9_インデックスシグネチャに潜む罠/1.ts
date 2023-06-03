type MyObj = { [key: string]: number };
const obj: MyObj = { foo: 123 };

const num: number = obj.bar;
// undefined と表示される
console.log(num);