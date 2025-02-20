import type { TextStyle } from '@tamagui/core';

const shorthands = createShorthands({
  b: 'bottom',
  bg: 'backgroundColor',
  l: 'left',
  m: 'margin',
  maxH: 'maxHeight',
  maxW: 'maxWidth',
  mb: 'marginBottom',
  minH: 'minHeight',
  minW: 'minWidth',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  r: 'right',
  rounded: 'borderRadius',
  t: 'top',
  z: 'zIndex',
});

function createShorthands<A extends Record<string, keyof TextStyle>>(a: A) {
  return a;
}

export default shorthands;
