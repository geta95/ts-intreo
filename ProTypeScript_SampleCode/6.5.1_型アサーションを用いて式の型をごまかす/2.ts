type Animal = {
  tag: "animal";
  species: string;
}
type Human = {
  tag: "human";
  name: string;
}
type User = Animal | Human;

function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
  if (users.every(user => user.tag === "human")) {
    // エラー: Property 'name' does not exist on type 'User'.
    //          Property 'name' does not exist on type 'Animal'.
    return users.map(user => user.name);
  }
  return undefined;
}