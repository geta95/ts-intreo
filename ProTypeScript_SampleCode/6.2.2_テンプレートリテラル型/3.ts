function fromKey<T extends string>(key: `user:${T}`): T {
    return key.slice(5) as T;
}

// userは"uhyo"型
const user = fromKey("user:uhyo");