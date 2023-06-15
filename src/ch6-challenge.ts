// Q1 Optionの実装
type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag: "none";
};

function showNumberIfExists(obj: Option<number>): void {
    if (obj.tag === "some") {
        console.log(obj.value);
    }
}

const four: Option<number> = {tag: "some", value: 4};
const nothing: Option<number> = {tag: "none"};

showNumberIfExists(four);
showNumberIfExists(nothing);

export {};