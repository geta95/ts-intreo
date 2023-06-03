type Human = {
  type: "Human";
  name: string;
  age: number;
};

function isPropertyAccessible(value: unknown): value is { [key: string]: unknown } {
  return value != null;
}

function isHuman(value: unknown): value is Human {
  // プロパティアクセスできない可能性を排除
  if (!isPropertyAccessible(value)) return false;
  // 3つのプロパティの型を判定
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}