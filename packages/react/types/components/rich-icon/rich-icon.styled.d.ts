import { Svg } from 'react-native-svg';
import type { RichIconContextType, RichIconSizes } from './rich-icon.types';
import type { XORIconProps } from '../../types';
import type { ColorTokens } from '@tamagui/core';
export declare const RichIconContext: import("react").Context<RichIconContextType> & {
    context: import("react").Context<RichIconContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<RichIconContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => RichIconContextType;
} & Omit<{
    contextMediaProps: ("color" | "size" | "backgroundColor")[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<RichIconContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: ("color" | "size" | "backgroundColor")[];
};
export declare const RichIconFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    color?: unknown;
    size?: RichIconSizes | undefined;
    backgroundColor?: unknown;
    pressable?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const RichIconShapeSvg: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, Svg, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    size?: RichIconSizes | undefined;
    backgroundColor?: any;
}, {
    isReactNative: boolean;
}>;
export declare const RichIconIcon: (props: XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    color?: (ColorTokens | (string & {})) | undefined;
    size?: (number | import("@tamagui/core").SizeTokens) | undefined;
}>> | null;
export declare const RichIconContent: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
export declare const RichIconText: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    color?: any;
    size?: RichIconSizes | undefined;
    backgroundColor?: unknown;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=rich-icon.styled.d.ts.map