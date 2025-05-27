import type { BreadcrumbsContextType } from './breadcrumbs.types';
import type { BreadcrumbsSizes } from './breadcrumbs.types';
export declare const BREADCRUMBS_COMPONENT_NAME = "Breadcrumbs";
export declare const BreadcrumbsContext: import("@tamagui/web").StyledContext<BreadcrumbsContextType>;
export declare const BreadcrumbsFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: BreadcrumbsSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const BreadcrumbsItem: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").FlexButtonProps, "size" | "disabled" | keyof import("@tamagui/web").StackStyleBase | "active" | "tone" | "isLoading" | "fullWidth"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").FlexButtonProps, import("@tamagui/web").StackStyleBase, {
    size?: import("..").FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    tone?: import("..").FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").FlexButtonProps, import("@tamagui/web").StackStyleBase, {
        size?: import("..").FlexButtonSizes | undefined;
        disabled?: boolean | undefined;
        active?: boolean | undefined;
        tone?: import("..").FlexButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic];
} & {
    Text: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        size?: import("..").FlexButtonSizes | undefined;
        disabled?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
};
//# sourceMappingURL=breadcrumbs.styled.d.ts.map