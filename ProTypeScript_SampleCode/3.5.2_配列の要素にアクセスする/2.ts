const arr = [0, 123, -456 * 100];
console.log(arr); // [0, 123, -45600] が表示される

arr[1] = 5400;
console.log(arr); // [0, 5400, -45600] が表示される