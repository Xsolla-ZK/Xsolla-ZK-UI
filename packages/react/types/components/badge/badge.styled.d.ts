import type { BadgeContextType, BadgeSizes } from './badge.types';
export declare const BadgeContext: import("@tamagui/web").StyledContext<BadgeContextType>;
export declare const BadgeFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
    size?: BadgeSizes | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./badge.types").BadgeTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const BadgeText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: BadgeSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const BadgeIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=badge.styled.d.ts.map