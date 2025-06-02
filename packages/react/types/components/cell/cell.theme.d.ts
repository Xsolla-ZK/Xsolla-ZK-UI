export declare const cellBoardTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_CellBoard`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_CellBoard`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_CellBoard: {
        background: string;
    };
    dark_CellBoard: {
        background: string;
    };
};
//# sourceMappingURL=cell.theme.d.ts.map