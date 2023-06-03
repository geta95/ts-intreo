function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// ↓ここで型エラーが発生
console.log(repeatHello("wow"));