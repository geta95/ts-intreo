// noImplicitOverride下ではコンパイルエラーが発生
class PremiumUser extends User {
  rank: number = 1;

  // エラー: This member must have an 'override' modifier because it overrides a member in the base class 'User'.
  public isAdult(): boolean {
    return true;
  }
}