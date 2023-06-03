import { Animal, tama } from "./animal.js";

// エラー: 'tama' cannot be used as a value because it was exported using 'export type'.
const myCat: Animal = tama;