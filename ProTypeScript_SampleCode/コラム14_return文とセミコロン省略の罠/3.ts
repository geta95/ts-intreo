function toSeconds(hours: number, minutes: number, seconds: number): number {
  return; // ←このセミコロンが省略されたと扱われる
      hours * 3600
      + minutes * 60
      + seconds;
}