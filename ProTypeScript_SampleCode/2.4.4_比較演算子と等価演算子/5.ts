const str: any = "3";

// true が表示される（文字列が数値に変換されるので）
console.log(str == 3); 

// false が表示される（異なる型である文字列と数値を比較しているので）
console.log(str === 3);