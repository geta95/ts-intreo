const repeatLength = 5;
const repeat = function<T>(element: T): T[] {
  const repeatLength = 3;

  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat("a"));  // ["a", "a", "a"] と表示される
console.log(repeatLength); // 5 と表示される