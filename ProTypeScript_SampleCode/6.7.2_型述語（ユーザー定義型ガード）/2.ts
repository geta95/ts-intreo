function isStringOrNumber(value: unknown): boolean {
  return typeof value === "string" || typeof value === "number";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  // エラー: Object is of type 'unknown'.
  console.log(something.toString());
}