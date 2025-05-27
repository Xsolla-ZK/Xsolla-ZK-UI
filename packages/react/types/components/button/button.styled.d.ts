import type { ButtonContextType, ButtonSizes, ButtonTone, ButtonVariants } from './button.types';
export declare const ButtonContext: import("@tamagui/web").StyledContext<ButtonContextType>;
export declare const ButtonFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
    size?: ButtonSizes | undefined;
    variant?: ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const ButtonText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: ButtonSizes | undefined;
    variant?: ButtonVariants | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const ButtonIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=button.styled.d.ts.map