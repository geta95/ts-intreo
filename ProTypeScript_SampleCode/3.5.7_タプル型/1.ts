let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", -555];

const str = tuple[0]; // strはstring型
const num = tuple[1]; // numはnumber型
// エラー: Tuple type '[string, number]' of length '2' has no element at index '2'.
const nothing = tuple[2];