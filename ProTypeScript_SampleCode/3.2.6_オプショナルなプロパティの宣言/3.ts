console.log(obj.baz * 1000); // これはコンパイルエラー

if (obj2.baz !== undefined) {
  console.log(obj2.baz * 1000); // これはOK
}