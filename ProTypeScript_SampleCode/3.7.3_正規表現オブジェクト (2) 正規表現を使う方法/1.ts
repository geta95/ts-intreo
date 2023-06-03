// "Hello, foobar world! abbc" と表示される
console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/, "foobar"));
// "Hello, foobar world! foobar" と表示される
console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"));