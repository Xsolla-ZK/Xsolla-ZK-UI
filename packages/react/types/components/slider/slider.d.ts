import type { SliderContextType, SliderKnobProps, SliderProps, SliderSizes } from './slider.types';
import type { TamaguiElement } from '@tamagui/core';
import type { View } from 'react-native';
export declare const SliderProvider: import("react").ProviderExoticComponent<Partial<SliderContextType> & {
    children?: import("react").ReactNode;
    scope?: string;
}>, useSliderContext: (scope?: string) => SliderContextType;
type SliderTrackElement = HTMLElement | View;
export declare const Slider: import("react").ForwardRefExoticComponent<SliderProps & {
    __scopeSlider?: string | undefined;
} & import("react").RefAttributes<unknown>> & {
    Track: import("react").ForwardRefExoticComponent<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<SliderTrackElement>>;
    TrackActive: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/web").StackStyleBase | "orientation" | "error"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    }>> & import("react").RefAttributes<View>>;
    Knob: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: SliderSizes | undefined;
    }>, keyof SliderKnobProps> & SliderKnobProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderKnobProps, import("@tamagui/web").StackStyleBase, {
        size?: SliderSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
};
export {};
//# sourceMappingURL=slider.d.ts.map