import type { AddPrefix } from './helpers';
import type tokensThemes from '../tokens/themes';
import type theme from '../utils/theme';
import type { Theme } from '@emotion/react';

export type XZKUITheme = ReturnType<typeof theme>;
export type XZKUIThemeProps = {
  theme: Theme;
};
export type XZKUIThemeModeUnion = keyof typeof tokensThemes;
export type XZKUIThemeSelected = (typeof tokensThemes)['dark'];

export type XZKUIStyledProps<T> = AddPrefix<T, 'xzkui'>;

export type XZKUICustomColorCallback = (theme: Pick<Theme, 'mode' | 'theme'>) => string;
export type XZKUICustomColor = string | XZKUICustomColorCallback;
