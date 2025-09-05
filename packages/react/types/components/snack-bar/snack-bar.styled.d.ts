import type { SnackBarContextType, SnackBarSizes } from './snack-bar.types';
export declare const SnackBarContext: import("react").Context<SnackBarContextType> & {
    context: import("react").Context<SnackBarContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<SnackBarContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => SnackBarContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<SnackBarContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const SnackBarFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SnackBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SnackBarContentFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SnackBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SnackBarContentDescriptionFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SnackBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SnackBarContentDescriptionListFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SnackBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SnackBarContentDescriptionActionsFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SnackBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=snack-bar.styled.d.ts.map