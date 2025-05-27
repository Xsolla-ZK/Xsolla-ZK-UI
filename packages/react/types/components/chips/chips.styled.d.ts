import type { ChipContextType, ChipSizes, ChipsSizes, ChipVariants } from './chips.types';
export declare const ChipContext: import("@tamagui/web").StyledContext<ChipContextType>;
export declare const ChipsFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: ChipsSizes | undefined;
    vertical?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const ChipFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const ChipText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const ChipIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=chips.styled.d.ts.map