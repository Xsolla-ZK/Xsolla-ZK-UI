import { css } from '@emotion/react';
import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import colorBlend from '@xsolla-zk-ui/react/utils/color/color-blend';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import xzkuiButtonClasses from './button.classes';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const buttonThemeSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const base = {
  size: [size[300], size[400], size[500], size[600], size[700]],
  font: [
    typography.compact[200].accent,
    typography.compact[250].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
  ],
  px: [spacing[200], spacing[250], spacing[300], spacing[350], spacing[400]],
  borderRadius: [radius[300], radius[400], radius[500], radius[500], radius[550]],
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
        backgroundColor: selectedTheme.theme.background.brandHigh,
        color: selectedTheme.theme.content.staticDarkPrimary,
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.theme.background.brandHigh,
              selectedTheme.theme.background.neutralHigh,
              'color-dodge',
            ),
          },
        },

        [`&.${xzkuiButtonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.theme.background.brandHigh,
            selectedTheme.theme.background.neutralHigh,
            'overlay',
          ),
        },

        [`&.${xzkuiButtonClasses.disabled}`]: {
          backgroundColor: selectedTheme.theme.overlay.neutral,
          color: selectedTheme.theme.content.neutralTertiary,
        },
      }),
      secondary: css({
        backgroundColor: selectedTheme.theme.overlay.neutral,
        color: selectedTheme.theme.content.neutralPrimary,
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.theme.overlay.neutral,
              selectedTheme.theme.background.neutralHigh,
              'color-dodge',
            ),
          },
        },

        [`&.${xzkuiButtonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.theme.overlay.neutral,
            selectedTheme.theme.background.neutralHigh,
            'overlay',
          ),
        },

        [`&.${xzkuiButtonClasses.disabled}`]: {
          backgroundColor: selectedTheme.theme.overlay.neutral,
          color: selectedTheme.theme.content.neutralTertiary,
        },
      }),
      primaryGhost: css({
        color: selectedTheme.theme.content.brandPrimary,
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.palette.goose[200],
              selectedTheme.theme.background.neutralHigh,
              'color-dodge',
            ),
          },
        },

        [`&.${xzkuiButtonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.palette.goose[200],
            selectedTheme.theme.background.neutralHigh,
            'overlay',
          ),
        },

        [`&.${xzkuiButtonClasses.disabled}`]: {
          backgroundColor: 'transparent',
          color: selectedTheme.theme.content.neutralTertiary,
        },
      }),
      secondaryGhost: css({
        color: selectedTheme.theme.content.neutralPrimary,
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: selectedTheme.theme.background.staticLightHigh, // fix
          },
        },

        [`&.${xzkuiButtonClasses.active}`]: {
          backgroundColor: selectedTheme.theme.background.neutralHigh, // fix
        },

        [`&.${xzkuiButtonClasses.disabled}`]: {
          backgroundColor: 'transparent',
          color: selectedTheme.theme.content.neutralTertiary,
        },
      }),
    },
  };
};

export default buttonTheme;
