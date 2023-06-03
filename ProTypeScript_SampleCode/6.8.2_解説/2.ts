const four: Option<number> = {
  tag: "some",
  value: 4
};

const nothing: Option<number> = {
  tag: "none"
};

showNumberIfExists(four);    // 4 が表示される
showNumberIfExists(nothing); // 何も表示されない