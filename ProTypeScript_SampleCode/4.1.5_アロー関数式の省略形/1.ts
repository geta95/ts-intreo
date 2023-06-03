// 普通の書き方
const calcBMI = ({
  height, weight
}: Human): number => {
  return weight / height ** 2;
};

// 省略形
const calcBMI = ({
  height, weight
}: Human): number => weight / height ** 2;