function getUserName(user: User) {
  if (user.tag === "human") {
    // ここではuserはHuman型
    return user.name;
  } else {
    // ここではuserはAnimal型
    return "名無し";
  }
}

const tama: User = {
  tag: "animal",
  species: "Felis silvestris catus"
};
const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

console.log(getUserName(tama)); // "名無し" と表示される
console.log(getUserName(uhyo)); // "uhyo" と表示される