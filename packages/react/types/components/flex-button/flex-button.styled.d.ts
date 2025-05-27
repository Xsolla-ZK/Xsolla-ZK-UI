import type { FlexButtonContextType, FlexButtonSizes, FlexButtonTone } from './flex-button.types';
export declare const FlexButtonContext: import("@tamagui/web").StyledContext<FlexButtonContextType>;
export declare const FlexButtonFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
    tone?: FlexButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const FlexButtonOverlay: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const FlexButtonText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FlexButtonSizes | undefined;
    disabled?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const FlexButtonIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=flex-button.styled.d.ts.map