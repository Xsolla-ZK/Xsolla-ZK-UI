import type { SegmentedControlContextValue, SegmentedControlSizes } from './segmented-control.types';
import type { XORIconProps } from '../../types';
export declare const SegmentedControlContext: import("react").Context<SegmentedControlContextValue> & {
    context: import("react").Context<SegmentedControlContextValue>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<SegmentedControlContextValue> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => SegmentedControlContextValue;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<SegmentedControlContextValue>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const SegmentedControlFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SegmentedControlSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    backgrounded?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SegmentedControlSegmentFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SegmentedControlSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    placement?: "left" | "right" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SegmentedControlSegmentText: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: SegmentedControlSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SegmentedControlSegmentIcon: (props: XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    color?: (import("@tamagui/core").ColorTokens | (string & {})) | undefined;
    size?: (number | import("@tamagui/core").SizeTokens) | undefined;
}>> | null;
//# sourceMappingURL=segmented-control.styled.d.ts.map