export declare const tabsTabTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_TabsTab`]: {
        [x: string]: string;
    } | {
        background: string;
        backgroundHover: string;
    };
    [x: `dark_${string}_TabsTab`]: {
        [x: string]: string;
    } | {
        background: string;
        backgroundHover: string;
    };
    light_TabsTab: {
        background: string;
        backgroundHover: string;
    };
    dark_TabsTab: {
        background: string;
        backgroundHover: string;
    };
};
export declare const tabsListIndicatorTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_TabsListIndicator`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_TabsListIndicator`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_TabsListIndicator: {
        background: string;
    };
    dark_TabsListIndicator: {
        background: string;
    };
};
//# sourceMappingURL=tabs.theme.d.ts.map