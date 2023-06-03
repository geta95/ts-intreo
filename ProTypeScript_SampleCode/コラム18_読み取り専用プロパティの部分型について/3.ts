type User = { name: string };
type ReadonlyUser = { readonly name: string };

const uhyoify = (user: User) => {
  user.name = "uhyo";
};

const john: ReadonlyUser = {
  name: "John Smith"
};
// これはコンパイルエラー（john.nameはreadonlyなので）
// エラー: Cannot assign to 'name' because it is a read-only property.
john.name = "Nanashi";

// これはエラーにならない！
uhyoify(john);

// readonlyなのにnameが変えられてしまった
console.log(john.name); // "uhyo" と表示される