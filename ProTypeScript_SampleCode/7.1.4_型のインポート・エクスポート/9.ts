import type { Animal, tama } from "./animal.js";

// エラー: 'tama' cannot be used as a value because it was imported using 'import type'.
const myCat: Animal = { ...tama };

// こちらはOK
const otherCat: typeof tama = {
  species: "Felis silvestris catus",
  age: 20
};