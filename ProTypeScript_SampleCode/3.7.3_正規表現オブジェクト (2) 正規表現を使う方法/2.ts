const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);
if (result !== null) {
  console.log(result[0]); // "abbbbbbc" と表示される
  console.log(result[1]); // "bbbbbb" と表示される
}