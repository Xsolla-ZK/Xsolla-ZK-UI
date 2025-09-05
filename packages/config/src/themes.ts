import { componentsTheme } from './components-theme';
import { themes as themesDefault } from './tokens/themes';
import { composeThemes, createTheme } from './utils/create-component-theme';

export const baseTheme = createTheme((tokens) => ({
  background: tokens['layer.floor-0'],
  color: tokens['content.neutral-primary'],
  backgroundHover: 'transparent',
  backgroundPress: 'transparent',
  backgroundFocus: 'transparent',
  colorHover: 'transparent',
  colorPress: 'transparent',
  colorFocus: 'transparent',
  borderColor: 'transparent',
  borderColorHover: 'transparent',
  borderColorPress: 'transparent',
  borderColorFocus: 'transparent',
  shadowColor: 'transparent',
  shadowColorHover: 'transparent',
  shadowColorPress: 'transparent',
  shadowColorFocus: 'transparent',
  placeholderColor: 'transparent',
  outlineColor: 'transparent',
  spinColor: 'transparent',
}));

export const themes = composeThemes(themesDefault, {
  base: baseTheme,
  components: componentsTheme,
});

export function themesInitializer<
  T extends Record<string, Record<string, string>>,
  C extends Record<string, ReturnType<typeof createTheme>>,
>(themes: T, componentsTheme: C) {
  return composeThemes(themes, {
    base: baseTheme,
    components: componentsTheme,
  });
}
