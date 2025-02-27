/**
 * @param {string} defaultFont
 * @returns {string}
 */
function generateTamaguiSettingsFile(defaultFont) {
  return `
    import type { CreateTamaguiProps } from '@tamagui/core';

    export const settings = {
      defaultFont: '${defaultFont}',
      fastSchemeChange: true,
      shouldAddPrefersColorThemes: true,
      allowedStyleValues: 'somewhat-strict-web',
      themeClassNameOnRoot: true,
      onlyAllowShorthands: false,
    } satisfies CreateTamaguiProps['settings'];
  `;
}

export default generateTamaguiSettingsFile;
