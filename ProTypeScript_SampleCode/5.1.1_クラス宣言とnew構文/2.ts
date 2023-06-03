// エラー: Class 'User' used before its declaration.
const uhyo = new User();

class User {
  name: string = "";
  age: number = 0;
}