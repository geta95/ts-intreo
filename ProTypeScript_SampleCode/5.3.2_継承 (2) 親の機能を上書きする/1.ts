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

  // ここでisAdultを再宣言
  public isAdult(): boolean {
    return true;
  }
}

const john = new User("John Smith", 15);
const taro = new PremiumUser("Taro Yamada", 15);

console.log(john.isAdult()); // false が表示される
console.log(taro.isAdult()); // true が表示される