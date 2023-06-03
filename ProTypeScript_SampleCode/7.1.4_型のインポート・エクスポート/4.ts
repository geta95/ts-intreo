type Animal = {
  species: string;
  age: number;
};

const tama: Animal = {
  species: "Felis silvestris catus",
  age: 1
};
// これはOK!
export type { Animal, tama };