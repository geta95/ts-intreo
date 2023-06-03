// エラー: The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<number>'?
async function get3(): number {
  console.log("get3が呼び出されました");
  return 3;
}