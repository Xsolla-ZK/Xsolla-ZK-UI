import { createComponentTheme } from '@xsolla-zk-ui/config';
import { FLEX_BUTTON_COMPONENT_NAME } from './flex-button.constants';

export const flexButtonTheme = createComponentTheme(
  FLEX_BUTTON_COMPONENT_NAME,
  (tokens) => ({
    backgroundPress: tokens['overlay.neutral'],
    backgroundHover: tokens['overlay.brand'],
    color: tokens['content.brand-primary'],
  }),
  {
    neutral: (tokens) => ({
      color: tokens['content.neutral-primary'],
    }),
  },
);
