function assertHuman(value: any): asserts value is Human {
  // プロパティアクセスできない可能性を排除
  if (value == null) {
    throw new Error('Given value is null or undefined');
  }
  // 3つのプロパティの型を判定
  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error('Given value is not a Human');
  }
}