type Item = {
  name: string;
  price: number;
}

const apple: Item = {
  name: "りんご",
  price: 200
};
// エラー: 'apple' refers to a value, but is being used as a type here. Did you mean 'typeof apple'?
const orange: apple = {
  name: "みかん",
  price: 150
};
// エラー: 'Item' only refers to a type, but is being used as a value here.
console.log(Item);