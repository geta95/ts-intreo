type RestArgs<M> = M extends "string" ? [string, string] : [number, number, number];

function func<M extends "string" | "number">(
  mode: M,
  ...args: RestArgs<M>
) {
  console.log(mode, ...args);
}

// これらの呼び出しはOK
func("string", "uhyo", "hyo");
func("number", 1, 2, 3)

// こちらはコンパイルエラー
// エラー: Argument of type 'number' is not assignable to parameter of type 'string'.
func("string", 1, 2);
// エラー: Expected 4 arguments, but got 3.
func("number", "uhyo", "hyo")