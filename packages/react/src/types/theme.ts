import type tokensThemes from '../tokens/themes';
import type theme from '../utils/theme';

export type XZKUITheme = ReturnType<typeof theme>;
export type XZKUIThemeModeUnion = keyof typeof tokensThemes;
