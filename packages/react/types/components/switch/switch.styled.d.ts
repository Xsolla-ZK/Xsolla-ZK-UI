import type { SwitchContextType, SwitchSizes } from './switch.types';
export declare const SwitchContext: import("react").Context<SwitchContextType> & {
    context: import("react").Context<SwitchContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<SwitchContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => SwitchContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<SwitchContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const SwitchFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SwitchSizes | undefined;
    disabled?: boolean | undefined;
    checked?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SwitchOverlay: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
export declare const SwitchKnob: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SwitchSizes | undefined;
    disabled?: boolean | undefined;
    checked?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=switch.styled.d.ts.map