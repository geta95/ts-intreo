type Union = "uhyo" | "hyo" | 1 | 2 | 3;
// T は "uhyo" | "hyo"
type T = Extract<Union, string>;