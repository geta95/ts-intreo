function thrower(): never {
  throw new Error("error!!!!");
}

// コンパイルエラーは起きない
const result: never = thrower();

const str: string = result;
console.log(str);