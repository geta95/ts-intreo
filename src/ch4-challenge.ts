// Q1
function getFizzBuzzString(i: number) {
    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz";
    } else if (i % 3 === 0) {
        return "Fizz";
    } else if (i % 5 === 0) {
        return "Buzz";
    } else {
        return String(i);
    }
}

for (let i = 1; i <= 100; i++) {
    const message = getFizzBuzzString(i);
    console.log(message);
}

// Q2: 配列で実装
function sequence(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);

}

// Q3 コールバック関数
function myMap<T, U>(array: T[], callback: (value: T) => U): U[] {
    const result: U[] = [];
    for (const elm of array) {
        result.push(callback(elm));
    }
    return result;
}

const data1 = [1, 1, 2, 3, 5, 8, 13];
const result = myMap<number, number>(data1, (x) => x * 10);
console.log(result);

const data2 = [1, -3, -2, 8, 0, -1];
const result2: boolean[] = myMap<number, boolean>(data2, (x) => x >= 0);
console.log(result2);
