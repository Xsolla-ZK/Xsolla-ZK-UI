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
        backgroundColor: selectedTheme.theme.background['brand-high'],
        color: selectedTheme.theme.content['static-dark-primary'],
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.theme.background['brand-high'],
              selectedTheme.theme.background['neutral-high'],
              'color-dodge',
            ),
          },
        },

        [`&.${buttonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.theme.background['brand-high'],
            selectedTheme.theme.background['neutral-high'],
            'overlay',
          ),
        },

        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: selectedTheme.theme.overlay.neutral,
          color: selectedTheme.theme.content['neutral-tertiary'],
        },
      }),
      secondary: css({
        backgroundColor: selectedTheme.theme.overlay.neutral,
        color: selectedTheme.theme.content['neutral-primary'],
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.theme.overlay.neutral,
              selectedTheme.theme.background['neutral-high'],
              'color-dodge',
            ),
          },
        },

        [`&.${buttonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.theme.overlay.neutral,
            selectedTheme.theme.background['neutral-high'],
            'overlay',
          ),
        },

        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: selectedTheme.theme.overlay.neutral,
          color: selectedTheme.theme.content['neutral-tertiary'],
        },
      }),
      primaryGhost: css({
        color: selectedTheme.theme.content['brand-primary'],
        '@media (pointer:fine)': {
          '&:hover': {
            backgroundColor: colorBlend(
              selectedTheme.palette.goose[200],
              selectedTheme.theme.background['neutral-high'],
              'color-dodge',
            ),
          },
        },

        [`&.${buttonClasses.active}`]: {
          backgroundColor: colorBlend(
            selectedTheme.palette.goose[200],
            selectedTheme.theme.background['neutral-high'],
            'overlay',
          ),
        },

        [`&.${buttonClasses.disabled}`]: {
          color: selectedTheme.theme.content['neutral-tertiary'],
        },
      }),
    },
  };
};

export default buttonTheme;
