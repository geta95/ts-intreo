function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// ↓型エラーが消える
console.log(repeatHello(10));