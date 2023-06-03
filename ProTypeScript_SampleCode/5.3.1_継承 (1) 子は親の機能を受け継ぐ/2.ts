function getMessage(u: User) {
  return `こんにちは、${u.name}さん`;
}

const john = new User("John Smith", 15);
const uhyo = new PremiumUser("uhyo", 26);

console.log(getMessage(john)); // "こんにちは、John Smithさん" と表示される
console.log(getMessage(uhyo)); // "こんにちは、uhyoさん" と表示される