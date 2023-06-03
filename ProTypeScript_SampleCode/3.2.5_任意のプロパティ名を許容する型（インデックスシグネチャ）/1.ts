type PriceData = {
  [key: string]: number;
}
const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500
};
// これはOK
data.chicken = 250;
// これはコンパイルエラー: Type '"foo"' is not assignable to type 'number'.
data.弁当 = "foo";