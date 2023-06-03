class User {
  readonly name: string = "";
  age: number = 0;
}

const uhyo = new User();
// エラー: Cannot assign to 'name' because it is a read-only property.
uhyo.name = "うひょ";