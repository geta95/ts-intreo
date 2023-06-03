const arr: readonly number[] = [1, 10, 100];
// エラー: Property 'push' does not exist on type 'readonly number[]'.
arr.push(1000);