import light from './light';
import dark from './dark';

const tokensThemes = {
  light,
  dark,
};

export type XZKUITheme = (typeof tokensThemes)['dark'];
export type XZKUIThemesUnion = keyof typeof tokensThemes;

export default tokensThemes;
