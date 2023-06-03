function useUnknown(val: unknown) {
  if (typeof val === "string") {
    // 型の絞り込みによりここではvalはstring型
    console.log("valは文字列です");
    console.log(val.slice(0, 5));
  } else {
    console.log("valは文字列以外の何かです");
    console.log(val);
  }
}

useUnknown("foobar");
useUnknown(null);