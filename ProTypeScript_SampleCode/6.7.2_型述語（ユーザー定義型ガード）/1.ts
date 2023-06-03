function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  // ここではsomethingは string | number 型
  console.log(something.toString());
}