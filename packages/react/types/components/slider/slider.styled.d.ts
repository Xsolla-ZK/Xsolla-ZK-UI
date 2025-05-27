import type { SliderContextType, SliderSizes } from './slider.types';
export declare const SliderContext: import("@tamagui/web").StyledContext<SliderContextType>;
export declare const SliderOrientationProvider: import("react").ProviderExoticComponent<Partial<{
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
export declare const SliderFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: SliderSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    error?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const SliderTrackFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: SliderSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    error?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const SliderTrackActiveFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: SliderSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    error?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const SliderKnobFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: SliderSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
//# sourceMappingURL=slider.styled.d.ts.map