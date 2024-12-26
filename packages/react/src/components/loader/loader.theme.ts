import { css } from '@emotion/react';
import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

const loaderTheme = (mode: XZKUIThemeModeUnion) => {
  const selectedTheme = tokensThemes[mode];

  return {
    variants: {
      default: css({
        color: selectedTheme.theme.border.neutralSecondary,
        '.spin': {
          stroke: selectedTheme.theme.border.brandPrimary,
        },
      }),
      light: css({
        color: selectedTheme.theme.background.staticDarkHigh,
        '.spin': {
          stroke: selectedTheme.theme.border.brandPrimary,
        },
      }),
      dark: css({
        color: selectedTheme.theme.background.staticLightHigh,
        '.spin': {
          stroke: selectedTheme.theme.border.brandPrimary,
        },
      }),
      brand: css({
        color: selectedTheme.theme.background.staticLightHigh,
        '.spin': {
          stroke: selectedTheme.theme.background.staticDarkHigh,
        },
      }),
    },
  };
};

export default loaderTheme;
