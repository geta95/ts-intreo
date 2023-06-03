// Userのインスタンスを2つ作成
const uhyo = new User();
const baby = new User();

uhyo.age = 26;

console.log(uhyo.isAdult()); // true が表示される
console.log(baby.isAdult()); // false が表示される