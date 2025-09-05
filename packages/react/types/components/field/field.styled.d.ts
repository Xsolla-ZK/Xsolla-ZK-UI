import type { FieldContextType, FieldSizes } from './field.types';
export declare const FieldContext: import("react").Context<FieldContextType> & {
    context: import("react").Context<FieldContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<FieldContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => FieldContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<FieldContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const FieldFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: FieldSizes | undefined;
    error?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const FieldRow: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: FieldSizes | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const FieldLabel: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & Omit<import("@tamagui/core").RNTamaguiTextNonStyleProps, keyof import("@tamagui/core").TextStylePropsBase | "preset"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & {
    preset?: import("../..").TypographyPresets | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & {
    preset?: import("../..").TypographyPresets | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").TextStylePropsBase, {
    preset?: import("../..").TypographyPresets | undefined;
}>> & {
    htmlFor?: string;
}, import("@tamagui/core").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
    error?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic & {
    neverFlatten: true;
}>;
export declare const FieldLabelValue: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const FieldHint: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const FieldHintValue: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=field.styled.d.ts.map