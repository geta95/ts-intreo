
const uhyo: Human & Animal = {
  name: "uhyo",
  species: "Homo sapiens sapiens"
};

// エラー無く呼び出せる！
const value = mysteryFunc(uhyo);
console.log(value);