function showNumberIfExists(obj: Option<number>) {
  if (isSome(obj)) {
    // コンパイルエラーが起きない！
    console.log(obj.value);
  }
}