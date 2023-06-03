const repeat = function<T>(element: T, length: number): T[] {
  // この変数resultはrepeatの変数スコープに属する
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

// 関数の外には変数resultは存在しない
// エラー: Cannot find name 'result'.
console.log(result);