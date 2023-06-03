function doNothing(val: unknown) {
  // エラー: Object is of type 'unknown'.
  const name = val.name;
  console.log(name);
}