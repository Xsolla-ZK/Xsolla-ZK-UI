export declare const toastTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_Toast`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_Toast`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_Toast: {
        background: string;
    };
    dark_Toast: {
        background: string;
    };
};
//# sourceMappingURL=toast.theme.d.ts.map