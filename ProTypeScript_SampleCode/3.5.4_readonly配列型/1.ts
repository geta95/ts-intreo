const arr: readonly number[] = [1, 10, 100];

// エラー: Index signature in type 'readonly number[]' only permits reading.
arr[1] = -500;