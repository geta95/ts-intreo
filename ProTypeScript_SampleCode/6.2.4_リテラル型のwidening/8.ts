function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}
function useNumber(num: number) {
  return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}

// エラー: Argument of type '"uhyo"' is not assignable to parameter of type '"plus" | "minus"'.
signNumber("uhyo");
// エラー: Argument of type 'string' is not assignable to parameter of type 'number'.
useNumber("uhyo");