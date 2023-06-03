type Animal = {
  species: string;
};
type Human = {
  name: string;
}

type User = Animal | Human;

// このオブジェクトはAnimal型なのでUser型に代入可能
const tama: User = {
  species: "Felis silvestris catus"
}
// このオブジェクトはHuman型なのでUser型に代入可能
const uhyo: User = {
  name: "uhyo"
};