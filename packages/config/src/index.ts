import animations from './animations';
import shorthands from './shorthands';
import { fonts } from './tokens/fonts';
import getTypographyPreset from './tokens/presets';
import { settings } from './tokens/settings';
import { themes } from './tokens/themes';
import { tokens } from './tokens/tokens';
import { deepMerge, createTheme, createComponentTheme } from './utils/create-component-theme';

export { sharedConfig } from './shared';
export {
  animations,
  shorthands,
  settings,
  tokens,
  fonts,
  themes,
  getTypographyPreset,
  deepMerge,
  createTheme,
  createComponentTheme,
};
