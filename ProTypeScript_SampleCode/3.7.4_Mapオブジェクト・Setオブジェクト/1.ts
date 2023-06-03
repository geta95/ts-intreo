const map: Map<string, number> = new Map();
map.set("foo", 1234);

console.log(map.get("foo")); // 1234 と表示される
console.log(map.get("bar")); // undefined と表示される