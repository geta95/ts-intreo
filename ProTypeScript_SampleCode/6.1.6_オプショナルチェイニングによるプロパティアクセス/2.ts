type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  // timeOrUndefinedは Date | undefined 型
  const timeOrUndefined = getTimeFunc?.();
}