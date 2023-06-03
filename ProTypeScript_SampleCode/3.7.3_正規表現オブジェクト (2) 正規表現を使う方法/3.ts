const result = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result !== null) {
  console.log(result.groups); // { "worldName": "bbbbbb" } と表示される
}