import type { BreadcrumbsContextType, BreadcrumbsSizes } from './breadcrumbs.types';
export declare const BREADCRUMBS_COMPONENT_NAME = "Breadcrumbs";
export declare const BreadcrumbsContext: import("react").Context<BreadcrumbsContextType> & {
    context: import("react").Context<BreadcrumbsContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<BreadcrumbsContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => BreadcrumbsContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<BreadcrumbsContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const BreadcrumbsFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: BreadcrumbsSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const BreadcrumbsItem: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").FlexButtonProps, "size" | "disabled" | keyof import("@tamagui/core").StackStyleBase | "active" | "tone" | "isLoading" | "fullWidth"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>> & import("@tamagui/core").StaticComponentObject<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").FlexButtonProps, import("@tamagui/core").StackStyleBase, {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic> & Omit<import("@tamagui/core").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").FlexButtonProps, import("@tamagui/core").StackStyleBase, {
        size?: import("..").FlexButtonSizes | undefined;
        disabled?: boolean | undefined;
        active?: boolean | undefined;
        tone?: import("..").FlexButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic];
} & {
    Text: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
        size?: import("..").FlexButtonSizes | undefined;
        disabled?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
};
//# sourceMappingURL=breadcrumbs.styled.d.ts.map