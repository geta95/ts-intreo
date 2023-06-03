class RepeatArray<T> extends Array<T> {
  repeat(times: number): RepeatArray<T> {
    const result = new RepeatArray<T>();
    for (let i = 0; i < times; i++) {
      result.push(...this);
    }
    return result;
  }
}

// [1, 2] に相当するRepeatArrayを作成
const arr = new RepeatArray(1, 2);
// pushで [1, 2, 3] にする
arr.push(3);
// arr.repeat(3) は [1, 2, 3, 1, 2, 3, 1, 2, 3] に相当するRepeatArray
const repeated = arr.repeat(3);

// RepeatArray(9) [1, 2, 3, 1, 2, 3, 1, 2, 3] と表示される
console.log(repeated);