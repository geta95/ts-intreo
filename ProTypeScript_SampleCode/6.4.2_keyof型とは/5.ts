const mmConversionTable = {
  mm: 1,
  cm: 10, // ←この行を追加
  m: 1e3,
  km: 1e6,
};

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6
  };
}

// { "mm": 3000000, "m": 3000, "km": 3 } と表示される
console.log(convertUnits(300000, "cm"));