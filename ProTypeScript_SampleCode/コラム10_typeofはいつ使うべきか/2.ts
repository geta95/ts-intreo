const commandList = ["attack", "defend", "run"] as const;

// "attack" | "defend" | "run" 型
type Command = typeof commandList[number];