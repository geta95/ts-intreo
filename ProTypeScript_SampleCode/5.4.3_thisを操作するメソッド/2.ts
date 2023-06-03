class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const uhyo = new User("uhyo", 25);
const john = new User("John Smith", 15);

// thisがuhyoに固定されたisAdult
const boundIsAdult = uhyo.isAdult.bind(uhyo);

console.log(boundIsAdult()); // true が表示される
console.log(boundIsAdult.call(john)); // true が表示される