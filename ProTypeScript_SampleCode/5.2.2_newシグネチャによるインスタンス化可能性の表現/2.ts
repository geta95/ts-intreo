class User {
  name: string = "";
  age: number = 0;
}

type MyUserConstructor = new () => User;

// UserはMyUserConstructor型を持つ
const MyUser: MyUserConstructor = User;
// MyUserはnewで使用可能
const u = new MyUser();
// uはUser型を持つ
console.log(u.name, u.age);