function useNever(value: never) {
  // never型はどんな型にも当てはめることができる
  const num: number = value;
  const str: string = value;
  const obj: object = value;
  console.log(`value is ${value}`);
}

// エラー: Argument of type '{}' is not assignable to parameter of type 'never'.
useNever({});
// エラー: Argument of type 'number' is not assignable to parameter of type 'never'.
useNever(3.14);