function formatNumberOrString(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}

console.log(formatNumberOrString(3.14));   // "3.140" と表示される
console.log(formatNumberOrString("uhyo")); // "uhyo" と表示される