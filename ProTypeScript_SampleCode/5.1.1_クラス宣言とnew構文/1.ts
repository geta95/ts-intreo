class User {
  name: string = "";
  age: number = 0;
}

const uhyo = new User();
console.log(uhyo.name); // "" が表示される
console.log(uhyo.age); // 0 が表示される

uhyo.age = 26;
console.log(uhyo.age); // 26 が表示される