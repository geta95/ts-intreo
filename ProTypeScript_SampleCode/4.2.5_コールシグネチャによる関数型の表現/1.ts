type MyFunc = {
  isUsed?: boolean;
  (arg: number): void;
};

const double: MyFunc = (arg: number) => {
  console.log(arg * 2)
};

// doubleはisUsedプロパティを持つ
double.isUsed = true;
console.log(double.isUsed);
// doubleは関数として呼び出せる
double(1000);