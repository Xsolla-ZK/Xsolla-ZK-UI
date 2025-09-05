import type { RadioGroupContextType, RadioGroupSizes } from './radio-group.types';
export declare const RadioGroupContext: import("react").Context<RadioGroupContextType> & {
    context: import("react").Context<RadioGroupContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<RadioGroupContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => RadioGroupContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<RadioGroupContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const RadioGroupFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: RadioGroupSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const RadioGroupOverlay: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: RadioGroupSizes | undefined;
    checked?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const RadioGroupItemFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: RadioGroupSizes | undefined;
    disabled?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=radio-group.styled.d.ts.map