import type { CheckboxContextType, CheckboxIndicatorProps, CheckboxSizes } from './checkbox.types';
export declare const CheckboxContext: import("react").Context<CheckboxContextType> & {
    context: import("react").Context<CheckboxContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<CheckboxContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => CheckboxContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<CheckboxContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const CheckboxFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: CheckboxSizes | undefined;
    disabled?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const CheckboxOverlay: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: CheckboxSizes | undefined;
    checked?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const CheckboxIndicator: (props: CheckboxIndicatorProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    color?: (import("@tamagui/core").ColorTokens | (string & {})) | undefined;
    size?: (number | import("@tamagui/core").SizeTokens) | undefined;
}>> | null;
//# sourceMappingURL=checkbox.styled.d.ts.map