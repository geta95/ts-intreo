const t = true, f = false;

console.log(t && t); // true と表示される
console.log(t && f); // false と表示される
console.log(f && f); // false と表示される

console.log(t || t); // true と表示される
console.log(t || f); // true と表示される
console.log(f || f); // false と表示される