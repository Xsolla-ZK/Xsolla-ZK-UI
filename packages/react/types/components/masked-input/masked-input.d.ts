import type { MaskedInputProps } from './masked-input.types';
declare function MaskedInputBase({ mask, value, onChangeText, onKeyDown, ...props }: MaskedInputProps): import("react/jsx-runtime").JSX.Element;
export declare const MaskedInput: typeof MaskedInputBase & {
    Props: import("react").ProviderExoticComponent<Partial<import("..").InputContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    StartSlot: ({ children, ...props }: Omit<import("@tamagui/web").GetProps<typeof import("@tamagui/core").Stack>, "children"> & {
        children: import("react").ReactNode | ((context: import("..").InputContextType) => import("react").ReactNode);
    }) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
    EndSlot: ({ children, ...props }: Omit<import("@tamagui/web").GetProps<typeof import("@tamagui/core").Stack>, "children"> & {
        children: import("react").ReactNode | ((context: import("..").InputContextType) => import("react").ReactNode);
    }) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
};
export {};
//# sourceMappingURL=masked-input.d.ts.map