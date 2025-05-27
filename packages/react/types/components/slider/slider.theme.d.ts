export declare const sliderTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_Slider`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_Slider`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_Slider: {
        background: string;
    };
    dark_Slider: {
        background: string;
    };
};
export declare const sliderTrackTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_SliderTrack`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_SliderTrack`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_SliderTrack: {
        background: string;
    };
    dark_SliderTrack: {
        background: string;
    };
};
export declare const sliderTrackActiveTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_SliderTrackActive`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    [x: `dark_${string}_SliderTrackActive`]: {
        [x: string]: string;
    } | {
        background: string;
    };
    light_SliderTrackActive: {
        background: string;
    };
    dark_SliderTrackActive: {
        background: string;
    };
};
export declare const sliderKnobTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    [x: `light_${string}_SliderKnob`]: {
        [x: string]: string;
    } | {
        background: string;
        borderColor: string;
    };
    [x: `dark_${string}_SliderKnob`]: {
        [x: string]: string;
    } | {
        background: string;
        borderColor: string;
    };
    light_SliderKnob: {
        background: string;
        borderColor: string;
    };
    dark_SliderKnob: {
        background: string;
        borderColor: string;
    };
};
//# sourceMappingURL=slider.theme.d.ts.map