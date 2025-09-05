import { Stack } from '@tamagui/core';
import { TextInput } from 'react-native';
import type { InputContextType, InputSizes } from './input.types';
import type { GetProps, StyledContext } from '@tamagui/core';
import type { ReactNode } from 'react';
export declare const InputContext: import("react").Context<InputContextType> & {
    context: import("react").Context<InputContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<InputContextType> & {
        children?: ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => InputContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: ReactNode;
        scope?: string;
    } & Partial<InputContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const InputFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: InputSizes | undefined;
    disabled?: boolean | undefined;
    focused?: boolean | undefined;
    isTextarea?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const InputStartSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: Omit<InputContextType, "size">) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>>;
export declare const InputEndSlot: ({ children, ...props }: Omit<GetProps<typeof Stack>, "children"> & {
    children: ReactNode | ((context: Omit<InputContextType, "size">) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>>;
export declare const InputElement: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, TextInput, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
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
    children: ReactNode | ((context: Omit<InputContextType, "size">) => ReactNode);
}) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>>;
//# sourceMappingURL=input.styled.d.ts.map