type Human = {
  name: string;
  age: number;
};

function useMaybeHuman(human: Human | undefined) {
  // ageは number | undefined 型
  const age = human?.age;
  console.log(age);
}