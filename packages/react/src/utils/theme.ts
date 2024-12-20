import buttonTheme from '../components/button/button.theme';
import tokensThemes from '../tokens/themes';
import type { XZKUIThemeModeUnion } from '../types/theme';

function theme(mode: XZKUIThemeModeUnion) {
  return {
    ...(tokensThemes[mode] as (typeof tokensThemes)['dark']),
    themeMode: mode,
    components: {
      button: buttonTheme(mode),
    },
  };
}

export default theme;
