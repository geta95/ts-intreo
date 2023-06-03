// 型名の名前空間にItemを作成
type Item = {
  name: string;
  price: number;
}
// 変数名の名前空間にItemを作成
const Item: Item = {
  name: "りんご",
  price: 200
};
// このItemは型名のItem
const orange: Item = {
  name: "みかん",
  price: 150
};
// このItemは変数名のItem
console.log(Item);