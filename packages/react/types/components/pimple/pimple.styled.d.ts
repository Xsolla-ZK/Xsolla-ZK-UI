import type { PimpleContextType, PimpleSizes } from './pimple.types';
export declare const PimpleContext: import("@tamagui/web").StyledContext<PimpleContextType>;
export declare const PimpleFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: PimpleSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const PimpleText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: PimpleSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const PimpleIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=pimple.styled.d.ts.map