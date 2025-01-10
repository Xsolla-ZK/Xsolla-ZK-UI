import { css } from '@emotion/react';
import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import xzkuiButtonClasses from './button.classes';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const buttonThemeSizes = [200, 300, 400, 500, 600, 700] as const;

const base = {
  size: [size[200], size[300], size[400], size[500], size[600], size[700]],
  font: [
    typography.compact[200].accent,
    typography.compact[200].accent,
    typography.compact[250].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
  ],
  px: [spacing[100], spacing[200], spacing[250], spacing[300], spacing[350], spacing[400]],
  borderRadius: [radius[300], radius[300], radius[400], radius[500], radius[500], radius[550]],
};

const buttonTheme = (mode: XZKUIThemeModeUnion) => {
  const selectedTheme = tokensThemes[mode];

  return {
    sizes: callbackObjectByKeys(buttonThemeSizes, (idx) =>
      css({
        minWidth: base.size[idx],
        minHeight: base.size[idx],
        font: base.font[idx],
        padding: `0 ${base.px[idx]}`,
        borderRadius: base.borderRadius[idx],
      }),
    ),
    variants: {
      primary: css({
        color: selectedTheme.theme.content.staticDarkPrimary,
        [`&:not(.${xzkuiButtonClasses.bgOff})`]: {
          backgroundColor: selectedTheme.theme.background.brandHigh,
        },
        [`&.${xzkuiButtonClasses.bgOff}`]: {
          color: selectedTheme.theme.content.brandPrimary,
        },
      }),
      secondary: css({
        [`&:not(.${xzkuiButtonClasses.bgOff})`]: {
          backgroundColor: selectedTheme.theme.overlay.neutral,
        },
        color: selectedTheme.theme.content.neutralPrimary,
      }),
    },
  };
};

export default buttonTheme;
