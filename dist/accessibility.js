export const attachFocus = ({ element, action }) => {
    const escapeEvent = (event) => {
        if (event.keyCode == 27) {
            action(event);
        }
    };
    const keyEvent = (event) => {
        const currentElement = event.srcElement;
        if (event.key === 'Tab' || event.keyCode == 9) {
            if (element && !element.contains(currentElement)) {
                action(event);
            }
        }
        if (event.key === 'ArrowDown' || event.keyCode == 40) {
            const nextElement = currentElement.nextElementSibling;
            if (element && !element.contains(nextElement)) {
                action(event);
            }
            else {
                nextElement.focus();
            }
        }
        if (event.key === 'ArrowUp' || event.keyCode == 38) {
            const previousElement = currentElement.previousElementSibling;
            if (element && !element.contains(previousElement)) {
                action(event);
            }
            else {
                previousElement.focus();
            }
        }
    };
    window.addEventListener('keydown', escapeEvent);
    window.addEventListener('keyup', keyEvent);
    return () => {
        window.removeEventListener('keydown', escapeEvent);
        window.removeEventListener('keyup', keyEvent);
    };
};
//# sourceMappingURL=accessibility.js.map