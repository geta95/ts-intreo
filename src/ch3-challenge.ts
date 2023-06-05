type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
mary Sue,14,1
`;

//ここにコードを足す

const users: User[] = [];
const lines = data.split("\n");
// console.log(lines);

for (const line of lines) {
    if (line !== "") {
        const elm = line.split(",");
        // console.log("line: " + line);
        // console.log(elm);
        const user: User = {
            name: elm[0],
            age: Number(elm[1]),
            premiumUser: Boolean(Number(elm[2]))
        };
        users.push(user);
    }
}

// console.log(users);

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}（${user.age}）はプレミアムユーザーです。`);
    } else {
        console.log(`${user.name}（${user.age}）はプレミアムユーザーではありません。`);
    }
}
