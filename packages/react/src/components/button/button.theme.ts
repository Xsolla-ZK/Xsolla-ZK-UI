import { createComponentTheme } from '@xsolla-zk-ui/config';

export const BUTTON_COMPONENT_NAME = 'Button';

export const buttonTheme = createComponentTheme(
  BUTTON_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['background.brand-high'],
    color: tokens['content.on-brand'],
    spinColor: tokens['content.brand-secondary'],
  }),
  {
    neutral: (tokens) => ({
      background: tokens['background.neutral-high'],
      color: tokens['content.on-neutral'],
    }),
  },
);
