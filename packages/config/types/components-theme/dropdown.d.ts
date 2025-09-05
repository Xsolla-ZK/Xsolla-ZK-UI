export declare const dropdownTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_Dropdown`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_Dropdown`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_Dropdown: {
        background: string;
    };
    dark_Dropdown: {
        background: string;
    };
};
//# sourceMappingURL=dropdown.d.ts.map