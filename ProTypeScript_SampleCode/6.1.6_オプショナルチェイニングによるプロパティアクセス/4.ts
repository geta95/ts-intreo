type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  // timeOrUndefinedは string | undefined 型
  const timeStringOrUndefined = getTimeFunc?.().toString();
}