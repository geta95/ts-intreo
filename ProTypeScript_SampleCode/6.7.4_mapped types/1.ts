type Fruit = "apple" | "orange" | "strawberry";

// FruitNumbers は {
//     apple: number;
//     orange: number;
//     strawberry: number;
// } 型
type FruitNumbers = {
  [P in Fruit]: number
};

const numbers: FruitNumbers = {
  apple: 3,
  orange: 10,
  strawberry: 20
};