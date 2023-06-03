const propName: string = "foo";
// objは{ [x: string}: number }型
const obj = {
  [propName]: 123
};
console.log(obj.foo); // 123 と表示される