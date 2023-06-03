function showAge(user: User) {
  // ↓コンパイルエラーが発生しない！
  const age = user.age;
  console.log(age);
}