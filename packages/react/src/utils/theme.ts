import buttonTheme from '../components/button/button.theme';
import dropdownTheme from '../components/dropdown/dropdown.theme';
import loaderTheme from '../components/loader/loader.theme';
import pimpleTheme from '../components/pimple/pimple.theme';
import richIconTheme from '../components/rich-icon/rich-icon.theme';
import semanticTextTheme from '../components/semantic-text/semantic-text.theme';
import common from '../tokens/common';
import layout from '../tokens/layout';
import tokensThemes from '../tokens/themes';
import type { XZKUIThemeModeUnion, XZKUIThemeSelected } from '../types/theme';

function theme(mode: XZKUIThemeModeUnion) {
  return {
    mode,
    common,
    layout,
    ...(tokensThemes[mode] as XZKUIThemeSelected),
    components: {
      button: buttonTheme(mode),
      loader: loaderTheme(mode),
      dropdown: dropdownTheme(mode),
      semanticText: semanticTextTheme(mode),
      pimple: pimpleTheme(mode),
      richIcon: richIconTheme(mode),
    },
  };
}

export default theme;
