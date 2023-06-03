type HasName = {
  name: string;
}
// エラー: Class 'User' incorrectly implements interface 'HasName'.
//        Property 'name' is missing in type 'User' but required in type 'HasName'.
class User implements HasName {
  #age: number;

  constructor(age: number) {
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}