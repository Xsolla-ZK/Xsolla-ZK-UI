export declare const tooltipTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_Tooltip`]: {
        [x: string]: string;
    } | {
        background: string;
        borderColor: string;
        color: string;
    };
    [x: `dark_${string}_Tooltip`]: {
        [x: string]: string;
    } | {
        background: string;
        borderColor: string;
        color: string;
    };
    light_Tooltip: {
        background: string;
        borderColor: string;
        color: string;
    };
    dark_Tooltip: {
        background: string;
        borderColor: string;
        color: string;
    };
};
//# sourceMappingURL=tooltip.d.ts.map