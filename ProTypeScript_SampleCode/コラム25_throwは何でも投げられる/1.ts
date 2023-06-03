try {
  throwNull();
} catch (err) {
  console.log(err, "が投げられました");
}

function throwNull() {
  throw null;
}