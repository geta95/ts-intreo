const p2 = readFile("foo.txt", "utf8")
  .then(() => sleepReject(1000))
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("エラーが発生しました！！！！", err);
  });