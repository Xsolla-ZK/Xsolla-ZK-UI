export declare const pimpleTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_Pimple`]: {
        [x: string]: string;
    } | {
        background: string;
        color: string;
    };
    [x: `dark_${string}_Pimple`]: {
        [x: string]: string;
    } | {
        background: string;
        color: string;
    };
    light_Pimple: {
        background: string;
        color: string;
    };
    dark_Pimple: {
        background: string;
        color: string;
    };
};
//# sourceMappingURL=pimple.d.ts.map