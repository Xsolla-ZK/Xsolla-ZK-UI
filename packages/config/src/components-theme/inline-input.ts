import { INLINE_INPUT_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const inlineInputTheme = createComponentTheme(
  INLINE_INPUT_COMPONENT_NAME,
  (tokens) => ({
    borderColorFocus: tokens['border.brand-primary'],
    placeholderColor: tokens['content.neutral-tertiary'],
    color: tokens['content.neutral-primary'],
  }),
  {
    error: (tokens) => ({
      placeholderColor: tokens['content.neutral-tertiary'],
      color: tokens['content.neutral-primary'],
    }),
    readonly: (tokens) => ({
      placeholderColor: tokens['content.neutral-tertiary'],
      color: tokens['content.neutral-tertiary'],
    }),
  },
);
