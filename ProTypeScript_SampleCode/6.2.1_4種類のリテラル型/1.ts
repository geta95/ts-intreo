// これは"foo"という文字列のみが属するリテラル型
type FooString = "foo";

// これはOK
const foo: FooString = "foo";

// エラー: Type '"bar"' is not assignable to type '"foo"'.
const bar: FooString = "bar";