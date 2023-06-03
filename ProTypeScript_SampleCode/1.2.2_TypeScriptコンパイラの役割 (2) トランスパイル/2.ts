// 変換前
class Human {
  greet() {
    console.log("Hello");
  }
}

// 変換後
var Human = /** @class */ (function () {
  function Human() {
  }
  Human.prototype.greet = function () {
    console.log("Hello");
  };
  return Human;
}());