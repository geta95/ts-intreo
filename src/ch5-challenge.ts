// Q1 function -> class

class User {
    readonly #name: string;
    readonly #age: number;

    constructor(name: string, age: number) {
        if (name === "") {
            throw new Error("名前は空にできません！");
        }
        this.#name = name;
        this.#age = age;
    }

    getMessage(message: string): string {
        return `${this.#name} (${this.#age}) 「${message}」`;
    }
}

const ryuno = new User("ryuno", 25);
console.log(ryuno.getMessage("Hello!"));

// Q2 class -> function
function createUser(name: string, age: number) {
    return (message: string) => {
        return `${name} (${age}) 「${message}」`;
    }
}

const getMessage = createUser("ryuno", 25);
console.log(getMessage("Hey!"));
