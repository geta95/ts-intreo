const user = {
  name: "uhyo",
  age: 26,
  isAdult() {
    return this.age >= 20;
  }
};

console.log(user.isAdult()); // true が表示される
user.age = 15;
console.log(user.isAdult()); // false が表示される