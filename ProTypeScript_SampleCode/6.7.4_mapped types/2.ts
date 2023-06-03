type Fruit = "apple" | "orange" | "strawberry";

// FruitArrays は {
//     apple: "apple"[];
//     orange: "orange"[];
//     strawberry: "strawberry"[];
// } 型
type FruitArrays = {
  [P in Fruit]: P[]
};

const numbers: FruitArrays = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  strawberry: []
};