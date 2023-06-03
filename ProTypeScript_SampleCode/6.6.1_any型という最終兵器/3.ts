function useNumber(num: number) {
  console.log(num);
}

function doWhatever(obj: any) {
  // string型の変数に入れられる
  const str: string = obj;
  // number型を要求する関数に渡せる
  useNumber(obj);
}