import type { themes } from '../tokens/themes';

type Themes = typeof themes;
type ThemeNames = keyof Themes;
type ThemeTokens = Themes[ThemeNames];
type StyleDefinition = Record<string, string>;

interface ThemeStyleGenerator<T extends StyleDefinition> {
  (themeTokens: ThemeTokens): T;
}

type SubthemeVariants = Subthemes<string, StyleDefinition>;

type Subthemes<V extends string, T extends StyleDefinition> =
  | Record<V, ThemeStyleGenerator<T>>
  | undefined;

interface ThemeOptions<
  C extends string | undefined = undefined,
  V extends SubthemeVariants = SubthemeVariants,
> {
  componentName?: C;
  subthemes?: V;
}

// Get all possible combinations of themes with subthemes
type ThemeSubthemeKeys<
  C extends string | undefined,
  V extends string | undefined,
> = C extends string
  ? `${ThemeNames}_${C}` | (V extends string ? `${ThemeNames}_${V}_${C}` : never)
  : ThemeNames;

// Type for an object of themes with a componentName and subthemes
type ThemeRecord<
  C extends string | undefined,
  V extends SubthemeVariants,
  S extends StyleDefinition,
> = C extends string
  ? {
      [K in ThemeSubthemeKeys<
        C,
        V extends object ? keyof V : undefined
      >]: K extends `${ThemeNames}_${infer U}_${C}` ? (V extends object ? ReturnType<V[U]> : S) : S;
    }
  : {
      [K in ThemeNames]: S;
    };

/**
 * Creates themes based on a style generator
 * @param styleGenerator - Function to generate styles for each theme
 * @param options - Options for creating a theme (componentName and subthemes)
 */
export function createTheme<
  C extends string | undefined = undefined,
  V extends SubthemeVariants = SubthemeVariants,
  S extends StyleDefinition = StyleDefinition,
>(styleGenerator: ThemeStyleGenerator<S>, options: ThemeOptions<C, V> = {}) {
  const { componentName, subthemes } = options;

  return <T extends Record<ThemeNames, Record<string, string>>>(themes: T) =>
    (Object.keys(themes) as ThemeNames[]).reduce(
      (acc, themeName) => {
        // Base theme
        const baseThemePath = (
          componentName ? `${themeName}_${componentName}` : themeName
        ) as keyof ThemeRecord<C, V, S>;
        acc[baseThemePath] = styleGenerator(themes[themeName] as ThemeTokens) as ThemeRecord<
          C,
          V,
          S
        >[keyof ThemeRecord<C, V, S>];

        // Theme subthemes
        if (subthemes) {
          Object.entries(subthemes).forEach(([subthemeName, subthemeGenerator]) => {
            const subthemeThemePath =
              `${themeName}_${subthemeName}_${componentName}` as keyof ThemeRecord<C, V, S>;
            acc[subthemeThemePath] = subthemeGenerator(
              themes[themeName] as ThemeTokens,
            ) as ThemeRecord<C, V, S>[keyof ThemeRecord<C, V, S>];
          });
        }

        return acc;
      },
      {} as ThemeRecord<C, V, S>,
    );
}

/**
 * Creates themes for a component with support for subthemes
 * @param componentName - The name of the component
 * @param styleGenerator - The function to generate styles for each theme
 * @param subthemes - An object with generators for styles for each subtheme
 */
export function createComponentTheme<
  C extends string,
  V extends SubthemeVariants,
  S extends StyleDefinition = StyleDefinition,
>(componentName: C, styleGenerator: ThemeStyleGenerator<S>, subthemes?: V) {
  return createTheme(styleGenerator, {
    componentName,
    subthemes,
  });
}

type DeepMerge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T
    ? K extends keyof U
      ? T[K] extends object
        ? U[K] extends object
          ? DeepMerge<T[K], U[K]>
          : T[K]
        : T[K] | U[K]
      : T[K]
    : K extends keyof U
      ? U[K]
      : never;
};

export function deepMerge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.entries(obj2).reduce(
    (acc, [key, value]) => {
      const typedKey = key as keyof (T & U);
      const accValue = acc[typedKey];

      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        typeof accValue === 'object' &&
        accValue !== null &&
        !Array.isArray(accValue)
      ) {
        acc[typedKey] = deepMerge(accValue, value) as (typeof acc)[typeof typedKey];
      } else {
        acc[typedKey] = value as (typeof acc)[typeof typedKey];
      }
      return acc;
    },
    { ...obj1 } as DeepMerge<T, U>,
  );
}

type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

type RecordToArray<T> = T extends Record<string, unknown> ? Array<T[keyof T]> : never;

type CreateThemesReturnType<
  T extends Record<ThemeNames, Record<string, string>>,
  B extends ReturnType<typeof createTheme>,
  C extends Record<string, ReturnType<typeof createTheme>>,
> = T & ReturnType<B> & UnionToIntersection<ReturnType<RecordToArray<C>[number]>>;

/**
 * Creates a theme object with support for base and component themes
 * @param themes - The base themes to extend
 * @param compose - An object containing optional base and component themes
 * @returns A merged theme object with support for base and component themes
 */
export function composeThemes<
  T extends Record<ThemeNames, Record<string, string>>,
  B extends ReturnType<typeof createTheme>,
  C extends Record<string, ReturnType<typeof createTheme>>,
>(
  themes: T,
  compose: {
    base?: B;
    components?: C;
  } = {},
) {
  const base = compose.base?.(themes);
  const components = Object.values(compose.components ?? {}).reduce((acc, curr) => {
    Object.assign(acc, curr(themes));
    return acc;
  }, {});

  return {
    ...(base ? deepMerge(themes, base) : themes),
    ...components,
  } as CreateThemesReturnType<T, B, C>;
}
