// theme
import palette from './dark/palette';
import theme from './dark/theme';
import effect from './dark/effect';
import shadow from './dark/shadow';
// semantic
import desktop from './dark/desktop';
import mobile from './dark/mobile';
import tabletLandscape from './dark/tablet-landscape';
import tabletPortrait from './dark/tablet-portrait';

const tokensDark = {
  palette,
  theme,
  effect,
  shadow,
  breakpoints: {
    desktop,
    mobile,
    tabletLandscape,
    tabletPortrait,
  },
};

export default tokensDark;
