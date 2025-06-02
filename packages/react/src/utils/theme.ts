type Theme = 'light' | 'dark' | (string & {});

type Themes = {
  [K in Theme]: Record<string, string>;
};

type ThemeNames = keyof Themes;
type ThemeTokens = Themes[ThemeNames];
type StyleDefinition = Record<string, string>;

interface ThemeStyleGenerator<T extends StyleDefinition, Tokens extends ThemeTokens> {
  (themeTokens: Tokens): T;
}

type SubthemeVariants<Tokens extends ThemeTokens> = Subthemes<string, StyleDefinition, Tokens>;

type Subthemes<V extends string, T extends StyleDefinition, Tokens extends ThemeTokens> =
  | Record<V, ThemeStyleGenerator<T, Tokens>>
  | undefined;

interface ThemeOptions<
  C extends string | undefined = undefined,
  Tokens extends ThemeTokens = ThemeTokens,
  V extends SubthemeVariants<Tokens> = SubthemeVariants<Tokens>,
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
  Tokens extends ThemeTokens,
  V extends SubthemeVariants<Tokens>,
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
export function createAppTheme<
  C extends string | undefined = undefined,
  Tokens extends ThemeTokens = ThemeTokens,
  V extends SubthemeVariants<Tokens> = SubthemeVariants<Tokens>,
  S extends StyleDefinition = StyleDefinition,
>(styleGenerator: ThemeStyleGenerator<S, Tokens>, options: ThemeOptions<C, Tokens, V> = {}) {
  const { componentName, subthemes } = options;

  return <T extends Record<ThemeNames, Record<string, string>>>(themes: T) =>
    (Object.keys(themes) as ThemeNames[]).reduce(
      (acc, themeName) => {
        // Base theme
        const baseThemePath = (
          componentName ? `${themeName}_${componentName}` : themeName
        ) as keyof ThemeRecord<C, Tokens, V, S>;
        acc[baseThemePath] = styleGenerator(themes[themeName] as Tokens) as ThemeRecord<
          C,
          Tokens,
          V,
          S
        >[keyof ThemeRecord<C, Tokens, V, S>];

        // Theme subthemes
        if (subthemes) {
          Object.entries(subthemes).forEach(([subthemeName, subthemeGenerator]) => {
            const subthemeThemePath =
              `${themeName}_${subthemeName}_${componentName}` as keyof ThemeRecord<C, Tokens, V, S>;
            acc[subthemeThemePath] = subthemeGenerator(themes[themeName] as Tokens) as ThemeRecord<
              C,
              Tokens,
              V,
              S
            >[keyof ThemeRecord<C, Tokens, V, S>];
          });
        }

        return acc;
      },
      {} as ThemeRecord<C, Tokens, V, S>,
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
  Tokens extends ThemeTokens = ThemeTokens,
  V extends SubthemeVariants<Tokens> = SubthemeVariants<Tokens>,
  S extends StyleDefinition = StyleDefinition,
>(componentName: C, styleGenerator: ThemeStyleGenerator<S, Tokens>, subthemes?: V) {
  return createAppTheme(styleGenerator, {
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
  B extends ReturnType<typeof createAppTheme>,
  C extends Record<string, ReturnType<typeof createAppTheme>>,
> = T & ReturnType<B> & UnionToIntersection<ReturnType<RecordToArray<C>[number]>>;

/**
 * Creates a theme object with support for base and component themes
 * @param themes - The base themes to extend
 * @param compose - An object containing optional base and component themes
 * @returns A merged theme object with support for base and component themes
 */
export function composeThemes<
  T extends Record<ThemeNames, Record<string, string>>,
  B extends ReturnType<typeof createAppTheme>,
  C extends Record<string, ReturnType<typeof createAppTheme>>,
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
