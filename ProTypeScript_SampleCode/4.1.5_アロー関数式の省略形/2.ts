type Human = {
  height: number;
  weight: number;
};
type ReturnObj = {
  bmi: number
}
// 正しい書き方
const calcBMIObject = ({
  height, weight
}: Human): ReturnObj => ({
  bmi: weight / height ** 2
});

// これはコンパイルエラーが発生
// エラー: A function whose declared type is neither 'void' nor 'any' must return a value.
const calcBMIObject2 = ({
  height, weight
}: Human): ReturnObj => {
  bmi: weight / height ** 2;
};