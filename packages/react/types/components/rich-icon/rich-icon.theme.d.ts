export declare const richIconTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_RichIcon`]: {
        [x: string]: string;
    } | {
        background: string;
        color: string;
    };
    [x: `dark_${string}_RichIcon`]: {
        [x: string]: string;
    } | {
        background: string;
        color: string;
    };
    light_RichIcon: {
        background: string;
        color: string;
    };
    dark_RichIcon: {
        background: string;
        color: string;
    };
};
//# sourceMappingURL=rich-icon.theme.d.ts.map