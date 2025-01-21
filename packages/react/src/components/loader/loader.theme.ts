import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

const loaderTheme = (mode: XZKUIThemeModeUnion) => {
  const selectedTheme = tokensThemes[mode];

  return {
    variants: {
      default: {
        color: selectedTheme.theme.border.neutralSecondary,
        '.spin': {
          stroke: selectedTheme.theme.border.brandPrimary,
        },
      },
      onLight: {
        color: selectedTheme.theme.background.staticDarkHigh,
        '.spin': {
          stroke: selectedTheme.theme.border.brandPrimary,
        },
      },
      onDark: {
        color: selectedTheme.theme.background.staticLightHigh,
        '.spin': {
          stroke: selectedTheme.theme.border.brandPrimary,
        },
      },
      brand: {
        color: selectedTheme.theme.background.staticLightHigh,
        '.spin': {
          stroke: selectedTheme.theme.background.staticDarkHigh,
        },
      },
    },
  };
};

export default loaderTheme;
