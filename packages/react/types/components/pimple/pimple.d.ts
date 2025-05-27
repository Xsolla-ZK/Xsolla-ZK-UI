import type { PimpleProps } from './pimple.types';
import type { TamaguiElement } from '@tamagui/core';
export declare const Pimple: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: import("./pimple.types").PimpleSizes | undefined;
}>, keyof PimpleProps> & PimpleProps & import("react").RefAttributes<TamaguiElement>> & import("@tamagui/web").StaticComponentObject<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: import("./pimple.types").PimpleSizes | undefined;
}>, keyof PimpleProps> & PimpleProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & PimpleProps, import("@tamagui/web").StackStyleBase, {
    size?: import("./pimple.types").PimpleSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./pimple.types").PimpleSizes | undefined;
    }>, keyof PimpleProps> & PimpleProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & PimpleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./pimple.types").PimpleSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic];
} & {
    Props: import("react").ProviderExoticComponent<Partial<import("./pimple.types").PimpleContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    Text: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        size?: import("./pimple.types").PimpleSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Icon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
};
//# sourceMappingURL=pimple.d.ts.map