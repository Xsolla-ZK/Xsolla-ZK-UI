import { createComponentTheme } from '@xsolla-zk-ui/config';
import { INPUT_COMPONENT_NAME } from './input.constants';

export const inputTheme = createComponentTheme(
  INPUT_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['overlay.neutral'],
    backgroundFocus: tokens['layer.floor-1'],
    borderColor: 'transparent',
    borderColorFocus: tokens['border.brand-primary'],
    placeholderColor: tokens['content.neutral-tertiary'],
    color: tokens['content.neutral-primary'],
  }),
  {
    error: (tokens) => ({
      background: tokens['overlay.neutral'],
      backgroundFocus: tokens['layer.floor-1'],
      borderColor: tokens['border.negative-primary'],
      borderColorFocus: tokens['border.negative-primary'],
      placeholderColor: tokens['content.neutral-tertiary'],
      color: tokens['content.neutral-primary'],
    }),
  },
);
