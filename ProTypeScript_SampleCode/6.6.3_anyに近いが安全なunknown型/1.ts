function doNothing(val: unknown) {
  console.log(val);
}

// doNothingにはどんな値でも渡すことができる
doNothing(3);
doNothing({
  user: {
    name: "uhyo"
  }
});
doNothing(()=> {
  console.log("hi");
});