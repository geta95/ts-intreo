// ...配列型 を2回使っているのでコンパイルエラー
type T1 = [number, ...string[], number, ...string[]];
type T2 = [number, ...string[], ...number[], string];
// オプショナルな要素を ...配列型 よりも後ろで使っているのでコンパイルエラー
type T3 = [number, ...string[], number?];