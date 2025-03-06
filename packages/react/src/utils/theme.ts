import checkboxTheme from '../components/checkbox/checkbox.theme';
import dropdownTheme from '../components/dropdown/dropdown.theme';
import inputTheme from '../components/input/input.theme';
import loaderTheme from '../components/loader/loader.theme';
import pimpleTheme from '../components/pimple/pimple.theme';
import radioTheme from '../components/radio/radio.theme';
import segmentedControlTheme from '../components/segmented-control/segmented-control.theme';
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
      loader: loaderTheme(mode),
      dropdown: dropdownTheme(mode),
      pimple: pimpleTheme(mode),
      segmentedControl: segmentedControlTheme(mode),
      tabs: tabsTheme(mode),
      input: inputTheme(mode),
      checkbox: checkboxTheme(mode),
      radio: radioTheme(mode),
    },
  };
}

export default theme;
