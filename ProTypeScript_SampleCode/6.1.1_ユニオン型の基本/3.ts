function getName(user: User): string {
  // エラー: Property 'name' does not exist on type 'User'.
  // Property 'name' does not exist on type 'Animal'.
  return user.name;
}