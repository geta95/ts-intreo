class PremiumUser extends User {
  rank: number = 1;

  // エラー: Property 'isAdult' in type 'PremiumUser' is not assignable to the same property in base type 'User'.
  public isAdult(): string {
    return "大人です！";
  }
}