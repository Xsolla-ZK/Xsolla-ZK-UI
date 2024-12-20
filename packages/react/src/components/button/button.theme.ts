import { css } from '@emotion/react';
import { buttonClasses } from '@mui/base';
import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import colorBlend from '@xsolla-zk-ui/react/utils/color/color-blend';
import type { SerializedStyles } from '@emotion/react';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const buttonThemeSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const base = {
  size: [size[300], size[400], size[500], size[600], size[700]],
  px: [spacing[200], spacing[250], spacing[300], spacing[350], spacing[400]],
  borderRadius: [radius[300], radius[400], radius[500], radius[500], radius[550]],
};

function calculateBy<T extends readonly string[]>(keys: T, cb: (idx: number) => SerializedStyles) {
  return keys.reduce(
    (acc, curr, idx) => {
      acc[curr as T[number]] = cb(idx);
      return acc;
    },
    {} as Record<T[number], SerializedStyles>,
  );
}

const buttonTheme = (mode: XZKUIThemeModeUnion) => {
  const selectedTheme = tokensThemes[mode];

  return {
    sizes: calculateBy(buttonThemeSizes, (idx) =>
      css({
        minWidth: base.size[idx],
        minHeight: base.size[idx],
        padding: `0 ${base.px[idx]}`,
        borderRadius: base.borderRadius[idx],
      }),
    ),
    // sizes: buttonThemeSizes.reduce<Record<(typeof buttonThemeSizes)[number], SerializedStyles>>(
    //   (acc, curr, idx) => {
    //     acc[curr] = css({
    //       minWidth: base.size[idx],
    //       minHeight: base.size[idx],
    //       padding: `0 ${base.px[idx]}`,
    //       borderRadius: base.borderRadius[idx],
    //     });
    //     return acc;
    //   },
    //   {},
    // ),
    variants: {
      primary: css({
        backgroundColor: selectedTheme.theme.backgroundBrandHigh,
        color: selectedTheme.theme.contentStaticDarkPrimary,
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.theme.backgroundBrandHigh,
              selectedTheme.theme.backgroundNeutralHigh,
              'color-dodge',
            ),
          },
        },

        [`&.${buttonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.theme.backgroundBrandHigh,
            selectedTheme.theme.backgroundNeutralHigh,
            'overlay',
          ),
        },

        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: selectedTheme.theme.overlayNeutral,
          color: selectedTheme.theme.contentNeutralTertiary,
        },
      }),
      secondary: css({
        backgroundColor: selectedTheme.theme.overlayNeutral,
        color: selectedTheme.theme.contentNeutralPrimary,
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.theme.overlayNeutral,
              selectedTheme.theme.backgroundNeutralHigh,
              'color-dodge',
            ),
          },
        },

        [`&.${buttonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.theme.overlayNeutral,
            selectedTheme.theme.backgroundNeutralHigh,
            'overlay',
          ),
        },

        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: selectedTheme.theme.overlayNeutral,
          color: selectedTheme.theme.contentNeutralTertiary,
        },
      }),
      primaryGhost: css({
        color: selectedTheme.theme.contentBrandPrimary,
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.palette.goose200,
              selectedTheme.theme.backgroundNeutralHigh,
              'color-dodge',
            ),
          },
        },

        [`&.${buttonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.palette.goose200,
            selectedTheme.theme.backgroundNeutralHigh,
            'overlay',
          ),
        },

        [`&.${buttonClasses.disabled}`]: {
          color: selectedTheme.theme.contentNeutralTertiary,
        },
      }),
    },
  };
};

export default buttonTheme;
