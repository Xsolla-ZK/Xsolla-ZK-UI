import { Stack } from '@tamagui/core';
import type { NavBarContextType, NavBarSizes, NavBarStateContextType } from './nav-bar.types';
import type { GetProps, StyledContext } from '@tamagui/core';
import type { ReactNode } from 'react';
export declare const NavBarFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: NavBarSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const NavBarStartSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: NavBarContextType) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: NavBarSizes | undefined;
}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
export declare const NavBarEndSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: NavBarContextType) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: NavBarSizes | undefined;
}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
export declare const NavBarContent: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: NavBarSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const NavBarCenter: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    preset?: "default" | "prominent" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const NavBarTitle: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    preset?: import("../..").TypographyPresets | "default" | "prominent" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const NavBarSubtitle: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    preset?: import("../..").TypographyPresets | "default" | "prominent" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare function createNavBarSlot(name: string, side: 'left' | 'right', context: StyledContext<NavBarStateContextType>): ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: NavBarContextType) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NavBarSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: NavBarSizes | undefined;
}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
//# sourceMappingURL=nav-bar.styled.d.ts.map