export const debounce = function <T extends Function>(cb: T, wait = 50) {
  let timer = 0;
  let callable = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
};
