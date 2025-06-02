import { createTamagui } from '@tamagui/core';
import { composeThemes, createTheme } from './utils/create-component-theme';
import type { CreateTamaguiProps } from '@tamagui/core';

export const baseTheme = createTheme((tokens) => ({
  background: tokens['layer.floor-0'],
  color: tokens['content.neutral-primary'],
}));

// export function createAppConfig<
//   Config extends CreateTamaguiProps,
//   Components extends Record<string, ReturnType<typeof createTheme>>,
// >(config: Config, components: Components) {
//   const { themes, ...rest } = config;

//   return createTamagui({
//     ...rest,
//     themes: composeThemes(themes as Record<string, Record<string, string>>, {
//       base: baseTheme,
//       components,
//     }),
//   });
// }
