const tama: User = {
  tag: "animal",
  species: "Felis silvestris catus"
};
const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

// これは代入できない
const alien: User = {
  // エラー: Type '"alien"' is not assignable to type '"animal" | "human"'.
  tag: "alien",
  name: "gray"
};