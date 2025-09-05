import type { TabsContextType, TabsSizes } from './tabs.types';
import type { XORIconProps } from '../../types';
export declare const TabsContext: import("react").Context<TabsContextType> & {
    context: import("react").Context<TabsContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<TabsContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => TabsContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<TabsContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const TabsFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: TabsSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const TabsListFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: TabsSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const TabsTabFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: TabsSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const TabsTabContent: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
export declare const TabsContentFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    hidden?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const TabsListIndicator: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: TabsSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const TabsTabText: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: TabsSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const TabsTabIcon: (props: XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    color?: (import("@tamagui/core").ColorTokens | (string & {})) | undefined;
    size?: (number | import("@tamagui/core").SizeTokens) | undefined;
}>> | null;
//# sourceMappingURL=tabs.styled.d.ts.map