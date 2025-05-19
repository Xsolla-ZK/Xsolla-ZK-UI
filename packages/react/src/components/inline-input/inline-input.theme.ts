import { createComponentTheme } from '@xsolla-zk/config';
import { INLINE_INPUT_COMPONENT_NAME } from './inline-input.constants';

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
