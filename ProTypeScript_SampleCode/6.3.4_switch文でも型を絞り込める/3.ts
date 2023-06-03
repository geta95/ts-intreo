function getUserName2(user: User): string {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "名無し";
    case "robot":
      return `CPU ${user.name}`;
  }
}