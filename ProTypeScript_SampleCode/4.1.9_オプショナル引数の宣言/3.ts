const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(toLowerOrUpper("Hello"));        // "hello" と表示される
console.log(toLowerOrUpper("Hello", false)); // "hello" と表示される
console.log(toLowerOrUpper("Hello", true));  // "HELLO" と表示される