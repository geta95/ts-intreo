import { increment, value } from "./counter.js";

increment();
console.log(`カウンタの値は${value}です`); // "カウンタの値は1です" と表示される
increment();
console.log(`カウンタの値は${value}です`); // "カウンタの値は2です" と表示される
increment();
console.log(`カウンタの値は${value}です`); // "カウンタの値は3です" と表示される