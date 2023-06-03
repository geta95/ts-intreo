type Human = {
  name: string;
  age?: number;
};

const john: Human = {
  name: "John Smith",
  // exactOptionalPropertyTypesが有効の場合以下のコンパイルエラーが発生
  // エラー: Type 'undefined' is not assignable to type 'number'.
  age: undefined
};