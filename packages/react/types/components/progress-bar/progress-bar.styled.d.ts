import type { ProgressBarContextType, ProgressBarSizes } from './progress-bar.types';
export declare const ProgressBarContext: import("react").Context<ProgressBarContextType> & {
    context: import("react").Context<ProgressBarContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<ProgressBarContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => ProgressBarContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<ProgressBarContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const ProgressBarFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: ProgressBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const ProgressBarActiveTrack: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: ProgressBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=progress-bar.styled.d.ts.map