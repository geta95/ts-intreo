function numberWithSign2(num: number, type: SignType | "none") {
  if (type === "none") {
    // ここではtypeは"none"型
    return 0;
  }

  // ここではtypeはSignType型
  return num * signNumber(type);
}

function numberWithSign3(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumber(type);
}

console.log(numberWithSign2(5, "minus")); // -5 と表示される
console.log(numberWithSign3(3, "plus")); // 3 と表示される