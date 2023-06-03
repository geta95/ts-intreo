class A {
  static foo = 123;
  static bar = this.foo * 2;
  static {
    console.log("bar is", this.bar); // "bar is" 246 と表示される
  }
}