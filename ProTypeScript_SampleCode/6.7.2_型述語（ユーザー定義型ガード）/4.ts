type Human = {
  type: "Human";
  name: string;
  age: number;
};

function isHuman(value: any): value is Human {
  // プロパティアクセスできない可能性を排除
  if (value == null) return false;
  // 3つのプロパティの型を判定
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}