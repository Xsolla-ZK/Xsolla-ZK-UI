import type { TabBarContextType } from './tab-bar.types';
export declare const TabBarContext: import("@tamagui/web").StyledContext<TabBarContextType>;
export declare const TabBarFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabBarItem: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
    size?: "$500" | undefined;
    vertical?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabBarItemTitle: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: "$500" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabBarItemIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=tab-bar.styled.d.ts.map