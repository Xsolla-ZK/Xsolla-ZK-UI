export declare const switchTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    light_Switch: {
        background: string;
        borderColor: string;
        outlineColor: string;
    };
    dark_Switch: {
        background: string;
        borderColor: string;
        outlineColor: string;
    };
    light_active_Switch: {
        background: string;
        borderColor: string;
        outlineColor: string;
    };
    dark_active_Switch: {
        background: string;
        borderColor: string;
        outlineColor: string;
    };
};
export declare const switchKnobTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
    light_SwitchKnob: {
        background: string;
    };
    dark_SwitchKnob: {
        background: string;
    };
    light_active_SwitchKnob: {
        background: string;
    };
    dark_active_SwitchKnob: {
        background: string;
    };
};
//# sourceMappingURL=switch.d.ts.map