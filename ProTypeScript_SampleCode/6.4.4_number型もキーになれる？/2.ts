function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  // エラー: Type 'string | number | symbol' is not assignable to type 'string'.
  //          Type 'number' is not assignable to type 'string'.
  const keyName: string = key;
  return obj[key];
}