const arr = [1, 10, 100];
console.log(arr.includes(100)); // true と表示される
console.log(arr.includes(50));  // false と表示される

// これはコンパイルエラー:
// Argument of type '"foobar"' is not assignable to parameter of type 'number'.
console.log(arr.includes("foobar"));