export declare const snackBarTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_SnackBar`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_SnackBar`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_SnackBar: {
        background: string;
    };
    dark_SnackBar: {
        background: string;
    };
};
//# sourceMappingURL=snack-bar.theme.d.ts.map