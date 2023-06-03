class PremiumUser extends User {
  rank: number;

  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }
}

const uhyo = new PremiumUser("uhyo", 26, 3);
console.log(uhyo.name); // "uhyo" が表示される
console.log(uhyo.rank); // 3 が表示される