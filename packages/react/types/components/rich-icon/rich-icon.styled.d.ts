import { type IconProps } from '@tamagui/helpers-icon';
import { Path as _Path, Svg as _Svg } from 'react-native-svg';
import type { RichIconContextType, RichIconShape, RichIconSizes } from './rich-icon.types';
import type { XORIconProps } from '../../types';
import type { GetProps } from '@tamagui/core';
export declare const RichIconContext: import("@tamagui/web").StyledContext<RichIconContextType>;
export declare const RichIconFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: RichIconSizes | undefined;
    backgroundColor?: unknown;
    pressable?: boolean | undefined;
    shape?: RichIconShape | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
declare const Svg: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, _Svg, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const RichIconShapeSvg: (props: Omit<GetProps<typeof Svg>, "width" | "height">) => import("react").FunctionComponentElement<Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<_Svg>> | null;
export declare const RichIconShapePath: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, _Path, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native-svg").PathProps, import("@tamagui/web").StackStyleBase & {
    readonly stroke?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {}, {
    accept: {
        readonly stroke: "color";
    };
}>;
export declare const RichIconIcon: ({ children, icon, ...rest }: XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<IconProps> | null;
export declare const RichIconContent: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const RichIconText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: RichIconSizes | undefined;
    backgroundColor?: unknown;
}, import("@tamagui/web").StaticConfigPublic>;
export {};
//# sourceMappingURL=rich-icon.styled.d.ts.map