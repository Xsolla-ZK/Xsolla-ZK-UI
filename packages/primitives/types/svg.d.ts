import { Svg } from 'react-native-svg';
import type { ColorTokens, GetProps, SizeTokens } from '@tamagui/core';
import type { NamedExoticComponent } from 'react';
type SizeProp = number | SizeTokens;
type ColorProp = ColorTokens | (string & {});
export declare const SvgThemed: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, Svg, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    color?: ColorProp | undefined;
    size?: SizeProp | undefined;
}, {
    isReactNative: boolean;
}>;
export type IconProps = GetProps<typeof SvgThemed>;
export type IconComponent = NamedExoticComponent<IconProps>;
export {};
//# sourceMappingURL=svg.d.ts.map