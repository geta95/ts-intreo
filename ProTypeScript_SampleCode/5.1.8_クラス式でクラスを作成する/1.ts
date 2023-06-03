const User = class {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
};
// Userは今までと同様に使用可能
const uhyo = new User("uhyo", 26);
console.log(uhyo.name);      // "uhyo" が表示される
console.log(uhyo.isAdult()); // true が表示される