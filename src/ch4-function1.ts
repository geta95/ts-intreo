function range(min: number, max: number) :number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(3,10));

function helloWorldNTimes2(n: number): void {
    if (n > 100) {
        console.log(`${n}回なんて無理です！`);
    } else {
        for (let i=1; i<=n; i++) {
            console.log("Hello World!!");
        }
    }
}

helloWorldNTimes2(5);
helloWorldNTimes2(500);

type Human = {
    height: number;
    weight: number;
};

// #1 普通の書き方
const calcBMI = function(human: Human) {
    return human.weight / human.height ** 2;
};

// #2 アロー関数
const calcBMI2 = ({height, weight}: Human): number => {
    return weight / height **2;
};

// #3 アロー関数（省略形）
const calcBMI3 = ({weight, height}: Human) => weight / height ** 2;

// 結果はどれも同じ
const ryu: Human = {height: 1.90, weight: 80};
console.log(calcBMI(ryu));
console.log(calcBMI2(ryu));
console.log(calcBMI3(ryu));

// 省略形を使用かつ
// 返り値がオブジェクトリテラルの場合は注意
type ReturnObj = { bmi: number };
const calcBMI4 = ({height, weight}: Human): ReturnObj => (
    { bmi: weight / height ** 2 }
);

console.log(calcBMI3(ryu));

// メソッド記法
const obj = {
    // メソッド記法
    double(num: number): number {
        return num * 2;
    },
    // 通常の書き方
    double2: (num: number): number => num * 2,
};

console.log(obj.double(100));
console.log(obj.double2(100));

const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};

console.log(sum(1, 10, 100));
console.log(sum(1, 10, 100, 456));
console.log(sum(0));

const toLowerOrUpper = (str: string, upper?: boolean) => {
    if (upper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
};

console.log(toLowerOrUpper("Hello, world!"));
console.log(toLowerOrUpper("Hello, world!", false));
console.log(toLowerOrUpper("Hello, world!", true));

type User2 = {name: string; age: number;};
const getName = (u: User2): string => {
    return u.name;
};
const users2: User2[] = [
    {name: "Ryu", age: 29},
    {name: "Momo", age: 27}
];

const names = users2.map((user) => {
    return getName(user);
});
console.log(getName(users2[0]))  ;
console.log(names);
