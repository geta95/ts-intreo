function sum(nums: readonly number[]): number {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

// sumにはreadonly number[]型を与えることができる
const nums1: readonly number[] = [1, 10, 100];
console.log(sum(nums1)); // 111 と表示される
// sumにはnumber[]型も与えることができる
const nums2: number[] = [1, 1, 2, 3, 5, 8];
console.log(sum(nums2)); // 20 と表示される