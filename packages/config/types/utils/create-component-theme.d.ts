import { themes } from '../tokens/themes';
import type { VariableColorVal } from '@tamagui/core';
type ThemeNames = keyof typeof themes;
type ThemeTokens = (typeof themes)[ThemeNames];
type StyleDefinition = Record<string, VariableColorVal>;
type PartialStyleDefinition = Partial<StyleDefinition>;
interface ThemeStyleGenerator<T extends PartialStyleDefinition> {
    (themeTokens: ThemeTokens): T;
}
type SubthemeVariants = Subthemes<string, StyleDefinition>;
type Subthemes<V extends string, T extends StyleDefinition> = Record<V, ThemeStyleGenerator<Partial<T>>> | undefined;
interface ThemeOptions<C extends string | undefined = undefined, V extends Subthemes<string, StyleDefinition> = Subthemes<string, StyleDefinition>> {
    componentName?: C;
    subthemes?: V;
}
type ThemeSubthemeKeys<C extends string | undefined, V extends string | undefined> = C extends string ? `${ThemeNames}_${C}` | (V extends string ? `${ThemeNames}_${V}_${C}` : never) : ThemeNames;
type ThemeRecord<C extends string | undefined, V extends SubthemeVariants, T extends StyleDefinition> = C extends string ? {
    [K in ThemeSubthemeKeys<C, V extends object ? keyof V : undefined>]: K extends `${ThemeNames}_${infer U}_${C}` ? (V extends object ? ReturnType<V[U]> : T) : T;
} : {
    [K in ThemeNames]: T;
};
/**
 * Creates themes based on a style generator
 * @param styleGenerator - Function to generate styles for each theme
 * @param options - Options for creating a theme (componentName and subthemes)
 */
export declare function createTheme<C extends string | undefined = undefined, V extends SubthemeVariants = SubthemeVariants, T extends StyleDefinition = StyleDefinition>(styleGenerator: ThemeStyleGenerator<T>, options?: ThemeOptions<C, V>): ThemeRecord<C, V, T>;
/**
 * Creates themes for a component with support for subthemes
 * @param componentName - The name of the component
 * @param styleGenerator - The function to generate styles for each theme
 * @param subthemes - An object with generators for styles for each subtheme
 */
export declare function createComponentTheme<C extends string, V extends SubthemeVariants, T extends StyleDefinition = StyleDefinition>(componentName: C, styleGenerator: ThemeStyleGenerator<T>, subthemes?: V): ThemeRecord<C, V, T>;
type DeepMerge<T, U> = {
    [K in keyof T | keyof U]: K extends keyof T ? K extends keyof U ? T[K] extends object ? U[K] extends object ? DeepMerge<T[K], U[K]> : T[K] : T[K] | U[K] : T[K] : K extends keyof U ? U[K] : never;
};
export declare function deepMerge<T extends object, U extends object>(obj1: T, obj2: U): DeepMerge<T, U>;
export {};
//# sourceMappingURL=create-component-theme.d.ts.map