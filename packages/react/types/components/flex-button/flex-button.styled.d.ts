import type { FlexButtonContextType, FlexButtonSizes, FlexButtonTone } from './flex-button.types';
import type { XORIconProps } from '../../types';
export declare const FlexButtonContext: import("react").Context<FlexButtonContextType> & {
    context: import("react").Context<FlexButtonContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<FlexButtonContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => FlexButtonContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<FlexButtonContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const FlexButtonFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    tone?: FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const FlexButtonOverlay: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
export declare const FlexButtonText: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const FlexButtonIcon: (props: XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    color?: (import("@tamagui/core").ColorTokens | (string & {})) | undefined;
    size?: (number | import("@tamagui/core").SizeTokens) | undefined;
}>> | null;
//# sourceMappingURL=flex-button.styled.d.ts.map