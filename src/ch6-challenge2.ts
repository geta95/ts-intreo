// Q2 タグ付きユニオンの練習1

type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag: "none";
};

function isSome<T>(obj: Option<T>): obj is {tag: "some"; value: T} {
        return obj.tag === "some";
}

function showNumberIfExists(obj: Option<number>) {
    if (isSome<number>(obj)) {
        console.log(obj.value);
    }
}

// Q3 タグ付きユニオンの練習2
function mapOption<T>(obj: Option<T>, callback: (value: T) => T ) {
    if (isSome<T>(obj)) {
        obj.value = callback(obj.value);
    }
    return obj;
}

function mapOption2<T, U>(obj: Option<T>, callback: (value: T) => U ) {
    switch (obj.tag) {
        case "some":
            return {
                tag: "some",
                value: callback(obj.value)
            };
        case "none":
            return {
                tag: "none"
            };
    }
    return obj;
}

function doubleOption(obj: Option<number>) {
    return mapOption(obj, x => x * 2);
}

function doubleOption2(obj: Option<number>) {
    return mapOption2(obj, x => x * 2);
}

const four: Option<number> = {tag: "some", value: 4};
const nothing: Option<number> = {tag: "none"};

console.log(doubleOption(four));
console.log(doubleOption(nothing));

console.log(doubleOption2(four));
console.log(doubleOption2(nothing));

export {};