export declare const segmentedControlTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_SegmentedControl`]: {
        [x: string]: string;
    } | {
        background: string;
        borderColor: string;
    };
    [x: `dark_${string}_SegmentedControl`]: {
        [x: string]: string;
    } | {
        background: string;
        borderColor: string;
    };
    light_SegmentedControl: {
        background: string;
        borderColor: string;
    };
    dark_SegmentedControl: {
        background: string;
        borderColor: string;
    };
};
export declare const segmentedControlSegmentTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    light_SegmentedControlSegment: {
        background: string;
        borderColor: string;
        color: string;
    };
    dark_SegmentedControlSegment: {
        background: string;
        borderColor: string;
        color: string;
    };
    light_active_SegmentedControlSegment: {
        background: string;
        borderColor: string;
        color: string;
    };
    dark_active_SegmentedControlSegment: {
        background: string;
        borderColor: string;
        color: string;
    };
};
//# sourceMappingURL=segmented-control.theme.d.ts.map