export const debounce = function (cb, wait = 50) {
    let timer = 0;
    let callable = (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => cb(...args), wait);
    };
    return callable;
};
//# sourceMappingURL=performance.js.map