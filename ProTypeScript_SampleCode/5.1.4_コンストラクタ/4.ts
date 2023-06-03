class User {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    // これはOK
    this.age = age;
  }

  setAge(newAge: number) {
    // エラー: Cannot assign to 'age' because it is a read-only property.
    this.age = newAge;
  }
}

const uhyo = new User("uhyo", 26);
// エラー: Cannot assign to 'age' because it is a read-only property.
uhyo.age = 27;