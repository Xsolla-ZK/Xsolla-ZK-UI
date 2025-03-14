import type { CreateTamaguiProps } from '@tamagui/core';

export const settings = {
  defaultFont: 'display',
  fastSchemeChange: true,
  shouldAddPrefersColorThemes: true,
  allowedStyleValues: 'somewhat-strict-web',
  themeClassNameOnRoot: true,
  onlyAllowShorthands: false,
} satisfies CreateTamaguiProps['settings'];
