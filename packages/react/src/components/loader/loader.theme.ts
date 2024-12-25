import { css } from '@emotion/react';
import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

const loaderTheme = (mode: XZKUIThemeModeUnion) => {
  const selectedTheme = tokensThemes[mode];

  return {
    variants: {
      default: css({
        color: selectedTheme.theme.border['neutral-secondary'],
        '.spin': {
          stroke: selectedTheme.theme.border['brand-primary'],
        },
      }),
      light: css({
        color: selectedTheme.theme.background['static-dark-high'],
        '.spin': {
          stroke: selectedTheme.theme.border['brand-primary'],
        },
      }),
      dark: css({
        color: selectedTheme.theme.background['static-light-high'],
        '.spin': {
          stroke: selectedTheme.theme.border['brand-primary'],
        },
      }),
      brand: css({
        color: selectedTheme.theme.background['static-light-high'],
        '.spin': {
          stroke: selectedTheme.theme.background['static-dark-high'],
        },
      }),
    },
  };
};

export default loaderTheme;
