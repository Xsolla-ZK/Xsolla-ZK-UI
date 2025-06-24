export declare const dialogContentTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_DialogContent`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_DialogContent`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_DialogContent: {
        background: string;
    };
    dark_DialogContent: {
        background: string;
    };
};
export declare const dialogOverlayTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_DialogOverlay`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_DialogOverlay`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_DialogOverlay: {
        background: string;
    };
    dark_DialogOverlay: {
        background: string;
    };
};
//# sourceMappingURL=dialog.d.ts.map