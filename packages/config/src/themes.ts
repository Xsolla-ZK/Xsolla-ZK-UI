import { componentsTheme } from './components-theme';
import { themes as themesDefault } from './tokens/themes';
import { composeThemes, createTheme } from './utils/create-component-theme';

const baseTheme = createTheme((tokens) => ({
  background: tokens['layer.floor-0'],
  color: tokens['content.neutral-primary'],
}));

export const themes = composeThemes(themesDefault, {
  base: baseTheme,
  components: componentsTheme,
});
