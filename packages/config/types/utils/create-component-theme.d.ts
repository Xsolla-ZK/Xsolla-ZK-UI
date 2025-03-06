import type { themes } from '../tokens/themes';
type ThemeNames = keyof typeof themes;
type Themes = typeof themes;
type ThemeTokens = Themes[ThemeNames];
type StyleDefinition = Record<string, string>;
interface ThemeStyleGenerator<T extends StyleDefinition> {
    (themeTokens: ThemeTokens): T;
}
type SubthemeVariants = Subthemes<string, StyleDefinition>;
type Subthemes<V extends string, T extends StyleDefinition> = Record<V, ThemeStyleGenerator<T>> | undefined;
interface ThemeOptions<C extends string | undefined = undefined, V extends SubthemeVariants = SubthemeVariants> {
    componentName?: C;
    subthemes?: V;
}
type ThemeSubthemeKeys<C extends string | undefined, V extends string | undefined> = C extends string ? `${ThemeNames}_${C}` | (V extends string ? `${ThemeNames}_${V}_${C}` : never) : ThemeNames;
type ThemeRecord<C extends string | undefined, V extends SubthemeVariants, S extends StyleDefinition> = C extends string ? {
    [K in ThemeSubthemeKeys<C, V extends object ? keyof V : undefined>]: K extends `${ThemeNames}_${infer U}_${C}` ? (V extends object ? ReturnType<V[U]> : S) : S;
} : {
    [K in ThemeNames]: S;
};
/**
 * Creates themes based on a style generator
 * @param styleGenerator - Function to generate styles for each theme
 * @param options - Options for creating a theme (componentName and subthemes)
 */
export declare function createTheme<C extends string | undefined = undefined, V extends SubthemeVariants = SubthemeVariants, S extends StyleDefinition = StyleDefinition>(styleGenerator: ThemeStyleGenerator<S>, options?: ThemeOptions<C, V>): <T extends Record<ThemeNames, Record<string, string>>>(themes: T) => ThemeRecord<C, V, S>;
/**
 * Creates themes for a component with support for subthemes
 * @param componentName - The name of the component
 * @param styleGenerator - The function to generate styles for each theme
 * @param subthemes - An object with generators for styles for each subtheme
 */
export declare function createComponentTheme<C extends string, V extends SubthemeVariants, S extends StyleDefinition = StyleDefinition>(componentName: C, styleGenerator: ThemeStyleGenerator<S>, subthemes?: V): <T extends Record<ThemeNames, Record<string, string>>>(themes: T) => ThemeRecord<C, V, S>;
type DeepMerge<T, U> = {
    [K in keyof T | keyof U]: K extends keyof T ? K extends keyof U ? T[K] extends object ? U[K] extends object ? DeepMerge<T[K], U[K]> : T[K] : T[K] | U[K] : T[K] : K extends keyof U ? U[K] : never;
};
export declare function deepMerge<T extends object, U extends object>(obj1: T, obj2: U): DeepMerge<T, U>;
type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type RecordToArray<T> = T extends Record<string, unknown> ? Array<T[keyof T]> : never;
type CreateThemesReturnType<T extends Record<ThemeNames, Record<string, string>>, B extends ReturnType<typeof createTheme>, C extends Record<string, ReturnType<typeof createTheme>>> = T & ReturnType<B> & UnionToIntersection<ReturnType<RecordToArray<C>[number]>>;
/**
 * Creates a theme object with support for base and component themes
 * @param themes - The base themes to extend
 * @param compose - An object containing optional base and component themes
 * @returns A merged theme object with support for base and component themes
 */
export declare function createThemes<T extends Record<ThemeNames, Record<string, string>>, B extends ReturnType<typeof createTheme>, C extends Record<string, ReturnType<typeof createTheme>>>(themes: T, compose?: {
    base?: B;
    components?: C;
}): CreateThemesReturnType<T, B, C>;
export {};
//# sourceMappingURL=create-component-theme.d.ts.map