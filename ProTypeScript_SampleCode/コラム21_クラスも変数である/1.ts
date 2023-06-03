class User {
  name: string = "";
  age: number = 0;
}

// Userクラスが入ったオブジェクト
const obj = {
  cl: User
};

// new obj.cl でUserのインスタンスが作成できる
const uhyo = new obj.cl();
console.log(uhyo.age); // 0 が表示される