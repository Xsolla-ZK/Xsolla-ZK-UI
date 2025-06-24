import type { SizeTokens, SizeVariantSpreadFunction, StackProps, VariantSpreadExtras } from '@tamagui/core';
export declare const getElevation: SizeVariantSpreadFunction<StackProps>;
export declare const getSizedElevation: (val: SizeTokens | number | boolean, { theme, tokens }: VariantSpreadExtras<any>) => {
    elevationAndroid?: number | undefined;
    shadowColor: import("@tamagui/web").Variable<string> | import("@tamagui/web").Variable<any> | import("@tamagui/web").Variable<undefined> | undefined;
    shadowRadius: number;
    shadowOffset: {
        height: number;
        width: number;
    };
} | undefined;
//# sourceMappingURL=get-elevation.d.ts.map