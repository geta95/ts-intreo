function toSeconds(hours: number, minutes: number, seconds: number): number {
  // セミコロンを省略しないreturn文
  return hours * 3600 + minutes * 60 + seconds;
  // セミコロンを省略したreturn文
  return hours * 3600 + minutes * 60 + seconds
}