function doWhatever(obj: any) {
  // 好きなプロパティにアクセスできる
  console.log(obj.user.name);
  // 関数呼び出しもできる
  obj();
  // 計算もできる
  const result = obj * 10;
  return result;
}