type NumberAndStrings = [number, ...string[]];

// これらはOK
const arr1: NumberAndStrings = [25, "uhyo", "hyo", "hyo"];
const arr2: NumberAndStrings = [25];
// これらはコンパイルエラー
const arr3: NumberAndStrings = ["uhyo", "hyo"];
const arr4: NumberAndStrings = [25, 26, 27];
const arr5: NumberAndStrings = [];