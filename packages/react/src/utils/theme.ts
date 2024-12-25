import buttonTheme from '../components/button/button.theme';
import dropdownTheme from '../components/dropdown/dropdown.theme';
import loaderTheme from '../components/loader/loader.theme';
import common from '../tokens/common';
import tokensThemes from '../tokens/themes';
import type { XZKUIThemeModeUnion, XZKUIThemeSelected } from '../types/theme';

function theme(mode: XZKUIThemeModeUnion) {
  return {
    mode,
    common,
    ...(tokensThemes[mode] as XZKUIThemeSelected),
    components: {
      button: buttonTheme(mode),
      loader: loaderTheme(mode),
      dropdown: dropdownTheme(mode),
    },
  };
}

export default theme;
