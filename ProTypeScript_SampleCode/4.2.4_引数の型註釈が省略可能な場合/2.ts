type F = (arg: number) => string;
// この関数式は引数の型を書かなくてもOK
const xRepeat: F = (num) => "x".repeat(num);