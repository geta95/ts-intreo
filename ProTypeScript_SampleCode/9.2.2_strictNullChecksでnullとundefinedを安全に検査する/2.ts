type MaybeHuman = {
  name?: string;
}

function func(obj: MaybeHuman) {
  // エラー: Type 'string | undefined' is not assignable to type 'string'.
  const name: string = obj.name;
  console.log(name);
}