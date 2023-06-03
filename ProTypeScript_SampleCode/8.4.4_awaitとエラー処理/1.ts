async function main() {
  const { readFile, writeFile } = await import("fs/promises");

  try {
    const fooContent = await readFile("foo.txt", "utf8");
    // 2倍にしてbar.txtに書き込む
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("書き込み完了しました");
  } catch {
    console.error("失敗しました");
  }
}

main().then(() => {
  console.log("main()が成功しました");
});