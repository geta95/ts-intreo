import { type } from "os";

// 型引数を持つ型
type Family1<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

const obj: Family1<number, string> = {
    mother: 0,
    father: 100,
    child: "1000"
};

// 部分型関係による型引数の制約
type HasName = {
    name:string;
};

type Family2<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

type Animal = {
    name: string;
};

type Human = {
    name: string;
    age: number;
};

// エラーなし
type T = Family2<Animal, Human>;

type Family3<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

// これはエラー
// Type 'Animal' does not satisfy the constraint 'Human'.
// Property 'age' is missing in type 'Animal' but required in type 'Human'.
// type S = Family3<Human, Animal>;

// オプショナルな型引数
type Family4<Parent = Animal, Child = Human> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

// 全部オーケー
type A = Family4<string, string>;
// <Animal, Child>
type B = Family4;
// <string, Human>
type C = Family4<string>;