import type { SliderContextType, SliderKnobProps, SliderProps, SliderSizes } from './slider.types';
import type { TamaguiElement } from '@tamagui/core';
import type { View } from 'react-native';
export declare const SliderProvider: import("react").Provider<SliderContextType> & import("react").ProviderExoticComponent<Partial<SliderContextType> & {
    children?: import("react").ReactNode;
    scope?: string;
}> & (<P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
    componentProps?: P | undefined;
    children?: import("react").ReactNode;
    scope?: string;
} & Partial<SliderContextType>) => import("react/jsx-runtime").JSX.Element), useSliderContext: (scope?: string) => SliderContextType;
type SliderTrackElement = HTMLElement | View;
export declare const Slider: import("react").ForwardRefExoticComponent<SliderProps & {
    scope?: string | undefined;
} & import("react").RefAttributes<unknown>> & {
    Track: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStyleBase | "orientation" | "error"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    }>> & import("react").RefAttributes<SliderTrackElement>>;
    TrackActive: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStyleBase | "orientation" | "error"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        size?: SliderSizes | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        error?: boolean | undefined;
    }>> & import("react").RefAttributes<View>>;
    Knob: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: SliderSizes | undefined;
    }>, keyof SliderKnobProps> & SliderKnobProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderKnobProps, import("@tamagui/core").StackStyleBase, {
        size?: SliderSizes | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
};
export {};
//# sourceMappingURL=slider.d.ts.map