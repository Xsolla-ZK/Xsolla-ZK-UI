import type { SliderContextType, SliderSizes } from './slider.types';
export declare const SliderContext: import("react").Context<SliderContextType> & {
    context: import("react").Context<SliderContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<SliderContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => SliderContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<SliderContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const SliderOrientationProvider: import("react").Provider<{
    startEdge: "bottom" | "left" | "right";
    endEdge: "top" | "right" | "left";
    sizeProp: "width" | "height";
    size: number | SliderSizes;
    direction: number;
}> & import("react").ProviderExoticComponent<Partial<{
    startEdge: "bottom" | "left" | "right";
    endEdge: "top" | "right" | "left";
    sizeProp: "width" | "height";
    size: number | SliderSizes;
    direction: number;
}> & {
    children?: import("react").ReactNode;
    scope?: string;
}>, useSliderOrientationContext: (scope?: string) => {
    startEdge: "bottom" | "left" | "right";
    endEdge: "top" | "right" | "left";
    sizeProp: "width" | "height";
    size: number | SliderSizes;
    direction: number;
};
export declare const SliderFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SliderSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    error?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SliderTrackFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SliderSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    error?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SliderTrackActiveFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SliderSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    error?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const SliderKnobFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SliderSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=slider.styled.d.ts.map