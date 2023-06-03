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

class PremiumUser extends User {
  rank: number = 1;
}

const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.rank);      // 1 が表示される
console.log(uhyo.name);      // "uhyo" が表示される
console.log(uhyo.isAdult()); // true が表示される