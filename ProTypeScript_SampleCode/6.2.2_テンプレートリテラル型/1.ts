function getHelloStr(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, world!";
  } else if (rand < 0.6) {
    return "Hello, my world!";
  } else if (rand < 0.9) {
    // エラー: Type '"Hello, world."' is not assignable to type '`Hello, ${string}!`'.
    return "Hello, world.";
  } else {
    // エラー: Type '"Hell, world!"' is not assignable to type '`Hello, ${string}!`'.
    return "Hell, world!";
  }
}