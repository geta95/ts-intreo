type Human = {
  type: "human";
  name: string;
  age: bigint; // ←ここをbigintに変更
};

function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26n, // ←ここをBigIntリテラルに変更
};

const uhyo2 = setAge(uhyo, 27n); // ←ここもBigIntリテラルに変更
console.log(uhyo2);