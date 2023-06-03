// トランスパイル前（TypeScript）
function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// トランスパイル後（JavaScript）
function repeatHello(count) {
  return "hello".repeat(count);
}