type Family<Parent extends HasName, Child extends Parent> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// これはOK
type S = Family<Animal, Human>;
// これはエラー （AnimalはHumanの部分型ではないため）
type T = Family<Human, Animal>;