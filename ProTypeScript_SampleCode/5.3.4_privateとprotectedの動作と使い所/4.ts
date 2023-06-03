class User {
  name: string;
  protected age: number;
  private _isAdult: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._isAdult = age >= 20;
  }

  public isAdult(): boolean {
    return this._isAdult;
  }
}

class PremiumUser extends User {
  // プレミアムユーザーは自分の年齢を編集できる
  public setAge(newAge: number) {
    this.age = newAge;
  }
}

const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.isAdult()); // true が表示される

uhyo.setAge(15);
console.log(uhyo.isAdult()); // true が表示される