import type { CreateTamaguiProps } from '@tamagui/core';
type FontOverrides<T> = {
    [K in keyof T]?: {
        family: string;
    };
} & {
    all?: {
        family: string;
    };
};
export declare function createCustomFont<T extends CreateTamaguiProps['fonts']>(fonts: T, overrides: FontOverrides<T>): T;
export {};
//# sourceMappingURL=create-custom-font.d.ts.map