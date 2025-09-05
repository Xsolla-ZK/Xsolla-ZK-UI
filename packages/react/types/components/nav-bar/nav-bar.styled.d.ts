import { Stack } from '@tamagui/core';
import type { NavBarSizes, NavBarStateContextType } from './nav-bar.types';
import type { GetProps, StyledContext } from '@tamagui/core';
import type { ReactNode } from 'react';
export declare const NavBarFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: NavBarSizes | undefined;
    preset?: "default" | "prominent" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const NavBarStartSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children?: ReactNode;
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: NavBarSizes | undefined;
}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>>;
export declare const NavBarEndSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children?: ReactNode;
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: NavBarSizes | undefined;
}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>>;
export declare const NavBarContent: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: NavBarSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const NavBarCenter: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    preset?: "default" | "prominent" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const NavBarTitle: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    preset?: import("../..").TypographyPresets | "default" | "prominent" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const NavBarSubtitle: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    preset?: import("../..").TypographyPresets | "default" | "prominent" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare function createNavBarSlot(name: string, side: 'left' | 'right', context: StyledContext<NavBarStateContextType>): ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children?: ReactNode;
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: NavBarSizes | undefined;
}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>>;
//# sourceMappingURL=nav-bar.styled.d.ts.map