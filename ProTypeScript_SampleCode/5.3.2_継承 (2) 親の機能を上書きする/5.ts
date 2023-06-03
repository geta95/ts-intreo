class PremiumUser extends User {
  rank: number;

  constructor(name: string, age: number, rank: number) {
    // エラー: 'super' must be called before accessing 'this' in the constructor of a derived class.
    this.rank = rank;
    super(name, age);
  }
}