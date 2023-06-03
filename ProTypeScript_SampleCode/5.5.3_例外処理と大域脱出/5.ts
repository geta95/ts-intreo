try {
  const bigInt = BigInt("foobar"); // ここでエラーが発生
  // よって下のconsole.logは実行されない
  console.log(bigInt);
} catch(error) {
  // SyntaxError: Cannot convert foobar to a BigInt が表示される（node.jsの場合）
  console.log(error);
}