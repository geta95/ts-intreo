class User {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number) {
    this.age = newAge;
  }
}

const uhyo = new User();
console.log(uhyo.isAdult()); // false が表示される

uhyo.setAge(26);
console.log(uhyo.isAdult()); // true が表示される