class User {
  name: string = "";
  age: number = 0;
}

const uhyo = new User();
// uhyoはUserのインスタンスなのでtrue
console.log(uhyo instanceof User);
// {}はUserのインスタンスではないのでfalse
console.log({} instanceof User);

const john: User = {
  name: "John Smith",
  age: 15,
};
// johnはUserのインスタンスではないのでfalse
console.log(john instanceof User);