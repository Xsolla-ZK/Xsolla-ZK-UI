// theme
import palette from './light/palette';
import theme from './light/theme';
import effect from './light/effect';
import shadow from './light/shadow';
// semantic
import desktop from './light/desktop';
import mobile from './light/mobile';
import tabletLandscape from './light/tablet-landscape';
import tabletPortrait from './light/tablet-portrait';

const tokensLight = {
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

export default tokensLight;
