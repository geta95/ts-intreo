function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus")); // 1 と表示される
console.log(signNumber("minus")); // -1 と表示される
// エラー: Argument of type '"uhyo"' is not assignable to parameter of type '"plus" | "minus"'.
console.log(signNumber("uhyo"));