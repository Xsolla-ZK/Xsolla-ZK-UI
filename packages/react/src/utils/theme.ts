import buttonTheme from '../components/button/button.theme';
import common from '../tokens/common';
import tokensThemes from '../tokens/themes';
import type { XZKUIThemeModeUnion } from '../types/theme';

function theme(mode: XZKUIThemeModeUnion) {
  return {
    ...(tokensThemes[mode] as (typeof tokensThemes)['dark']),
    mode,
    common,
    components: {
      button: buttonTheme(mode),
    },
  };
}

export default theme;
