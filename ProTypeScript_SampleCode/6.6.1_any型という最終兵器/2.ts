// 全部コンパイルエラーが発生しないがランタイムエラーになる
doWhatever(3);
doWhatever({
  user: {
    name: "uhyo"
  }
});
doWhatever(()=> {
  console.log("hi");
});