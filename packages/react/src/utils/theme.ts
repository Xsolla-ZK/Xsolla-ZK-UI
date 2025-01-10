import buttonTheme from '../components/button/button.theme';
import dropdownTheme from '../components/dropdown/dropdown.theme';
import loaderTheme from '../components/loader/loader.theme';
import pimpleTheme from '../components/pimple/pimple.theme';
import richIconTheme from '../components/rich-icon/rich-icon.theme';
import segmentedControlTheme from '../components/segmented-control/segmented-control.theme';
import semanticTextTheme from '../components/semantic-text/semantic-text.theme';
import tabsTheme from '../components/tabs/tabs.theme';
import common from '../tokens/common';
import layout from '../tokens/layout';
import tokensThemes from '../tokens/themes';
import type { XZKUIThemeModeUnion, XZKUIThemeSelected } from '../types/theme';

const easingFunctions = {
  easeOutQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
};

function theme(mode: XZKUIThemeModeUnion, themes = tokensThemes) {
  return {
    mode,
    common,
    layout,
    ...(tokensThemes[mode] as XZKUIThemeSelected),
    easingFunctions,
    transitions: {
      state: `${easingFunctions.easeOutQuad} 0.1s`,
    },
    components: {
      button: buttonTheme(mode),
      loader: loaderTheme(mode),
      dropdown: dropdownTheme(mode),
      semanticText: semanticTextTheme(mode),
      pimple: pimpleTheme(mode),
      richIcon: richIconTheme(mode),
      segmentedControl: segmentedControlTheme(mode),
      tabs: tabsTheme(mode),
    },
  };
}

export default theme;
