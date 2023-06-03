class user {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // エラー: Property 'age' is used before being assigned.
    console.log(this.age);
    this.name = name;
    this.age = age;
    // これはthis.ageに代入済なのでOK
    console.log(this.age);
  }
}