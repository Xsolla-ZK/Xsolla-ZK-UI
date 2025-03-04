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

type Subthemes<V extends string, T extends StyleDefinition> =
  | Record<V, ThemeStyleGenerator<Partial<T>>>
  | undefined;

interface ThemeOptions<
  C extends string | undefined = undefined,
  V extends Subthemes<string, StyleDefinition> = Subthemes<string, StyleDefinition>,
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
  T extends StyleDefinition,
> = C extends string
  ? {
      [K in ThemeSubthemeKeys<
        C,
        V extends object ? keyof V : undefined
      >]: K extends `${ThemeNames}_${infer U}_${C}` ? (V extends object ? ReturnType<V[U]> : T) : T;
    }
  : {
      [K in ThemeNames]: T;
    };

/**
 * Creates themes based on a style generator
 * @param styleGenerator - Function to generate styles for each theme
 * @param options - Options for creating a theme (componentName and subthemes)
 */
export function createTheme<
  C extends string | undefined = undefined,
  V extends SubthemeVariants = SubthemeVariants,
  T extends StyleDefinition = StyleDefinition,
>(styleGenerator: ThemeStyleGenerator<T>, options: ThemeOptions<C, V> = {}) {
  const { componentName, subthemes } = options;

  return (Object.keys(themes) as ThemeNames[]).reduce(
    (acc, themeName) => {
      // Base theme
      const baseThemePath = (
        componentName ? `${themeName}_${componentName}` : themeName
      ) as keyof ThemeRecord<C, V, T>;
      acc[baseThemePath] = styleGenerator(themes[themeName]) as ThemeRecord<
        C,
        V,
        T
      >[keyof ThemeRecord<C, V, T>];

      // Theme subthemes
      if (subthemes) {
        Object.entries(subthemes).forEach(([subthemeName, subthemeGenerator]) => {
          const subthemeThemePath =
            `${themeName}_${subthemeName}_${componentName}` as keyof ThemeRecord<C, V, T>;
          acc[subthemeThemePath] = subthemeGenerator(themes[themeName]) as ThemeRecord<
            C,
            V,
            T
          >[keyof ThemeRecord<C, V, T>];
        });
      }

      return acc;
    },
    {} as ThemeRecord<C, V, T>,
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
  T extends StyleDefinition = StyleDefinition,
>(componentName: C, styleGenerator: ThemeStyleGenerator<T>, subthemes?: V) {
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
