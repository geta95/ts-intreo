// 環境変数SECRETを取得。ただし存在しなければ"default"を用いる
const secret = process.env.SECRET ?? "default";

console.log(`secretは${secret}です`);