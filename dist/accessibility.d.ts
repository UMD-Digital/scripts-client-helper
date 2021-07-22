declare type AttachFocusParams = {
    element: HTMLElement;
    action: (arg: KeyboardEvent) => void;
};
export declare type AttachFocusType = (arg: AttachFocusParams) => () => void;
export declare type AttachEventsType = () => void | undefined;
export declare const attachFocus: AttachFocusType;
export {};
//# sourceMappingURL=accessibility.d.ts.map