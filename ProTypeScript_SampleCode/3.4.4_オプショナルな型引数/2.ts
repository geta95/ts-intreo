// 通常どおりの使い方
type S = Family<string, string>;
// TはFamily<Animal, Animal>と同じ
type T = Family;
// UはFamily<string, Animal>と同じ
type U = Family<string>;