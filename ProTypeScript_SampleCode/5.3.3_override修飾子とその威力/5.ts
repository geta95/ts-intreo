class PremiumUser extends User {
  rank: number = 1;

  // エラー: This member cannot have an 'override' modifier because it is not declared in the base class 'User'.
  public override isAdult(): boolean {
    return true;
  }
}