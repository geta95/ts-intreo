type Human = {
  name: string;
  age: number;
}

function getOneUserName(user1?: Human, user2?: Human): string | undefined {
  if (user1 === undefined && user2 === undefined) {
    return undefined;
  }
  if (user1 !== undefined) {
    return user1.name;
  }
  // エラー: Object is possibly 'undefined'.
  return user2.name;
}