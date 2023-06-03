const user = {
  name: "uhyo",
  age: 25,
};

// エラー: Cannot assign to 'user' because it is a constant.
user = {
  name: "John Smith",
  age: 15,
};