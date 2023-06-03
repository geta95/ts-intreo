function isStringOrNumber(value: unknown): value is string | number {
  // 実装を間違えているがエラーが起きない！
  return typeof value === "string" || typeof value === "boolean";
}