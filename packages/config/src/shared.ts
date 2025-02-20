import animations from './animations';
import shorthands from './shorthands';
import common from './tokens/common';
import theme from './tokens/theme';
import fonts from './tokens/typography/fonts';
import type { CreateTamaguiProps } from '@tamagui/core';

export const settings = {
  defaultFont: 'display',
  fastSchemeChange: true,
  shouldAddPrefersColorThemes: true,
  allowedStyleValues: 'somewhat-strict-web',
  themeClassNameOnRoot: true,
  onlyAllowShorthands: true,
} satisfies CreateTamaguiProps['settings'];

export const themes = theme;

export const tokens = common;

export const sharedConfig = {
  animations,
  shorthands,
  fonts,
  settings,
} satisfies CreateTamaguiProps;
