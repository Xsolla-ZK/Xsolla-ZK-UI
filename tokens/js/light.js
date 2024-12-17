// common
import opacity from './light/opacity';
import shadow from './light/shadow';
import layout from './light/layout';
import radius from './light/radius';
import size from './light/size';
import spacing from './light/spacing';
import stroke from './light/stroke';
import typography from './light/typography';
// theme
import palette from './light/palette';
import theme from './light/theme';
import effect from './light/effect';
// semantic
import desktop from './light/desktop';
import mobile from './light/mobile';
import tabletLandscape from './light/tablet-landscape';
import tabletPortrait from './light/tablet-portrait';

const tokensLight = {
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

export default tokensLight;
