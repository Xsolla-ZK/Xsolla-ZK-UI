import type { GetProps } from '@tamagui/core';
export declare const themeableVariants: {
    readonly backgrounded: {
        readonly true: {
            readonly backgroundColor: "$background";
        };
    };
    readonly radiused: {
        true: (_: any, extras: any) => {
            borderRadius: any;
        };
    };
    readonly hoverTheme: {
        true: {
            hoverStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly pressTheme: {
        true: {
            cursor: string;
            pressStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly focusTheme: {
        true: {
            focusStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly circular: {
        true: (_: any, { props, tokens }: any) => {
            borderRadius: number;
            padding: number;
        } | {
            width: any;
            height: any;
            maxWidth: any;
            maxHeight: any;
            minWidth: any;
            minHeight: any;
            borderRadius: number;
            padding: number;
        };
    };
    readonly padded: {
        true: (_: any, extras: any) => {
            padding: any;
        };
    };
    readonly elevate: {
        true: (_: boolean, extras: any) => any;
    };
    readonly bordered: (val: boolean | number, { props }: any) => any;
    readonly transparent: {
        readonly true: {
            readonly backgroundColor: "transparent";
        };
    };
    readonly chromeless: {
        readonly true: {
            backgroundColor: string;
            borderColor: string;
            shadowColor: string;
            hoverStyle: {
                borderColor: string;
            };
        };
        readonly all: {
            readonly hoverStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
                hoverStyle: {
                    borderColor: string;
                };
            };
            readonly pressStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
                hoverStyle: {
                    borderColor: string;
                };
            };
            readonly focusStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
                hoverStyle: {
                    borderColor: string;
                };
            };
            readonly backgroundColor: string;
            readonly borderColor: string;
            readonly shadowColor: string;
        };
    };
};
export declare const ThemeableStack: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    inset?: number | import("@tamagui/web").SizeTokens | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    } | null | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    backgrounded?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export type ThemeableStackProps = GetProps<typeof ThemeableStack>;
//# sourceMappingURL=themeable-stack.d.ts.map