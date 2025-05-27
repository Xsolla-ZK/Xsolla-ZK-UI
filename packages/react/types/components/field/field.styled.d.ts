import type { FieldContextType, FieldSizes } from './field.types';
export declare const FieldContext: import("@tamagui/web").StyledContext<FieldContextType>;
export declare const FieldFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: FieldSizes | undefined;
    error?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const FieldRow: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: FieldSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const FieldLabel: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & Omit<import("@tamagui/core").RNTamaguiTextNonStyleProps, keyof import("@tamagui/web").TextStylePropsBase | "preset"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
    preset?: import("../..").TypographyPresets | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
    preset?: import("../..").TypographyPresets | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
    preset?: import("../..").TypographyPresets | undefined;
}>> & {
    htmlFor?: string;
}, import("@tamagui/web").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
}, import("@tamagui/web").StaticConfigPublic & {
    neverFlatten: true;
}>;
export declare const FieldLabelValue: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const FieldHint: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
    error?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const FieldHintValue: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FieldSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
    error?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
//# sourceMappingURL=field.styled.d.ts.map