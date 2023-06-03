function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  return str.slice(0, 5);
}

// "uhyoh" と表示される
console.log(getFirstFiveLetters("uhyohyohyo"));

// ランタイムエラーが発生！
console.log(getFirstFiveLetters(123));