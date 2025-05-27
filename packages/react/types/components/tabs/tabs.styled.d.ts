import type { TabsContextType, TabsSizes } from './tabs.types';
export declare const TabsContext: import("@tamagui/web").StyledContext<TabsContextType>;
export declare const TabsFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: TabsSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabsListFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: TabsSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabsTabFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: TabsSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabsTabContent: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabsContentFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    hidden?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabsListIndicator: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: TabsSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabsTabText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: TabsSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const TabsTabIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=tabs.styled.d.ts.map