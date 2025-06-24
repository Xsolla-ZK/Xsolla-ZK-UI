export declare const progressBarTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_ProgressBar`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_ProgressBar`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_ProgressBar: {
        background: string;
    };
    dark_ProgressBar: {
        background: string;
    };
};
export declare const progressBarActiveTrackTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_ProgressBarActiveTrack`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_ProgressBarActiveTrack`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_ProgressBarActiveTrack: {
        background: string;
    };
    dark_ProgressBarActiveTrack: {
        background: string;
    };
};
//# sourceMappingURL=progress-bar.d.ts.map