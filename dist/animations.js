export const scrollTo = ({ element, spread = 30, frames = 60 }) => {
    const documentBody = document.documentElement.scrollTop || document.body.scrollTop;
    const elm = document.body;
    let from = 0;
    const to = element.getBoundingClientRect();
    const toPosition = documentBody == 0 ? to.top - from - spread : to.top - spread;
    const currentPosition = window.pageYOffset;
    const jump = (toPosition - from) / frames;
    from = currentPosition;
    function scroll() {
        if (frames > 0) {
            const position = from + jump;
            from = position;
            elm.scrollTop = from;
            document.documentElement.scrollTop = from;
            frames--;
            window.requestAnimationFrame(scroll);
        }
        else {
            const elms = Array.from(element.querySelectorAll('a, button'));
            element.focus({ preventScroll: true });
            if (Array.isArray(elms) && elms.length > 0) {
                elms[0].focus({ preventScroll: true });
            }
        }
    }
    window.requestAnimationFrame(scroll);
};
//# sourceMappingURL=animations.js.map