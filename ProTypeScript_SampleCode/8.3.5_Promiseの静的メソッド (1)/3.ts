// Promise.reject("foo") と同じ挙動
new Promise((resolve, reject) => { reject("foo"); })