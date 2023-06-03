function checkAndUseHuman(value: unknown) {
  assertHuman(value);
  // ここから下ではvalueがHuman型になる
  const name = value.name;
  // （略）
}