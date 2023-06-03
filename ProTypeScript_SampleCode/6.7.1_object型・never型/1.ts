// toStringを持つ値の型
type HasToString = {
  toString: () => string
}

function useToString1(value: HasToString) {
  console.log(`value is ${value.toString()}`);
}

// "value is foo!" と表示される
useToString1({
  toString() {
    return "foo!";
  }
});

// "value is 3.14" と表示される
useToString1(3.14);