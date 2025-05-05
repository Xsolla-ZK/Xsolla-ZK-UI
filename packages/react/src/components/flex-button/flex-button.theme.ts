import { createComponentTheme } from '@xsolla-zk/config';
import { FLEX_BUTTON_COMPONENT_NAME } from './flex-button.constants';

export const flexButtonTheme = createComponentTheme(
  FLEX_BUTTON_COMPONENT_NAME,
  (tokens) => ({
    backgroundHover: tokens['overlay.brand'],
    backgroundPress: tokens['overlay.brand'],
    borderColorPress: tokens['border.brand-secondary'],
    color: tokens['content.brand-primary'],
  }),
  {
    neutral: (tokens) => ({
      backgroundHover: tokens['overlay.neutral'],
      backgroundPress: tokens['overlay.neutral'],
      borderColorPress: tokens['border.neutral-secondary'],
      color: tokens['content.neutral-primary'],
    }),
  },
);
