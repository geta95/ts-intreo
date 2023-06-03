// 20歳以上のユーザーだけの配列
const adultUsers = users.filter((user: User) => user.age >= 20);
// すべてのユーザーが20歳以上ならtrue
const allAdult = users.every((user: User) => user.age >= 20);
// 60歳以上のユーザーが1人でもいればtrue
const seniorExists = users.some((user: User) => user.age >= 60);
// 名前がJohnで始まるユーザーを探して返す
const john = users.find((user: User) => user.name.startsWith("John"));