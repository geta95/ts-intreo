try {
  console.log("tryブロック1")
  throwError();
  console.log("tryブロック2")
} catch (err) {
  console.log("catchブロック")
} finally {
  console.log("finallyブロック")
}