// 数値から文字列へ
const str1 = String(1234.5); // "1234.5" という文字列になる
console.log(str1); // "1234.5" と表示される

// 真偽値から文字列へ
const str2 = String(true); // "true" という文字列になる
console.log(str2); // "true" と表示される

// nullやundefinedも文字列に変換可能
const str3 = String(null); // "null" という文字列になる
const str4 = String(undefined); // "undefined" という文字列になる
console.log(str3, str4); // "null undefined" と表示される
