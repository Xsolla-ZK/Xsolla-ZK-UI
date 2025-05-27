export declare const sheetTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_Sheet`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_Sheet`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_Sheet: {
        background: string;
    };
    dark_Sheet: {
        background: string;
    };
};
export declare const sheetOverlayTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_SheetOverlay`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_SheetOverlay`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_SheetOverlay: {
        background: string;
    };
    dark_SheetOverlay: {
        background: string;
    };
};
//# sourceMappingURL=sheet.theme.d.ts.map