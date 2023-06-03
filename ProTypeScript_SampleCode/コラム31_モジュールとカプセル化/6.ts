import { increment, value } from "./counter.js";

increment();
console.log(`カウンタの値は${value}です`);

// Cannot assign to 'value' because it is an import.
value = 100;
console.log(`カウンタの値は${value}です`);