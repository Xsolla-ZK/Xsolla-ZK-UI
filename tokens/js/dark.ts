// common
import opacity from './dark/opacity';
import shadow from './dark/shadow';
import layout from './dark/layout';
import radius from './dark/radius';
import size from './dark/size';
import spacing from './dark/spacing';
import stroke from './dark/stroke';
import typography from './dark/typography';
// theme
import palette from './dark/palette';
import theme from './dark/theme';
import effect from './dark/effect';
// semantic
import desktop from './dark/desktop';
import mobile from './dark/mobile';
import tabletLandscape from './dark/tablet-landscape';
import tabletPortrait from './dark/tablet-portrait';

const tokensDark = {
  opacity,
  shadow,
  layout,
  radius,
  size,
  spacing,
  stroke,
  typography,
  palette,
  theme,
  effect,
  breakpoints: {
    desktop,
    mobile,
    tabletLandscape,
    tabletPortrait,
  },
};

export default tokensDark;
