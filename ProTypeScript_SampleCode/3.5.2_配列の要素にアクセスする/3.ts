const arr = [0, 123, -456 * 100];
// これはOK
arr[1] = 5400;
// これはエラー
// エラー: Cannot assign to 'arr' because it is a constant.
arr = [1, 2, 345, 67];