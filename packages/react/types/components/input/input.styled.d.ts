import { Stack } from '@tamagui/core';
import { TextInput } from 'react-native';
import type { InputContextType, InputSizes } from './input.types';
import type { GetProps, StyledContext } from '@tamagui/core';
import type { ReactNode } from 'react';
export declare const InputContext: StyledContext<InputContextType>;
export declare const InputFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: InputSizes | undefined;
    disabled?: boolean | undefined;
    focused?: boolean | undefined;
    isTextarea?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const InputStartSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: InputContextType) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
export declare const InputEndSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: InputContextType) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
export declare const InputElement: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, TextInput, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
    validStyles: {
        [key: string]: boolean;
    } | undefined;
}>;
export declare function createInputSlot(name: string, context: StyledContext<InputContextType>): ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: InputContextType) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
//# sourceMappingURL=input.styled.d.ts.map