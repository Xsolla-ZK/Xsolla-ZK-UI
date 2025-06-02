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
    positive: (tokens) => ({
      backgroundHover: tokens['overlay.positive'],
      backgroundPress: tokens['overlay.positive'],
      borderColorPress: tokens['border.positive-secondary'],
      color: tokens['content.positive-primary'],
    }),
    warning: (tokens) => ({
      backgroundHover: tokens['overlay.warning'],
      backgroundPress: tokens['overlay.warning'],
      borderColorPress: tokens['border.warning-secondary'],
      color: tokens['content.warning-primary'],
    }),
    info: (tokens) => ({
      backgroundHover: tokens['overlay.info'],
      backgroundPress: tokens['overlay.info'],
      borderColorPress: tokens['border.info-secondary'],
      color: tokens['content.info-primary'],
    }),
    negative: (tokens) => ({
      backgroundHover: tokens['overlay.negative'],
      backgroundPress: tokens['overlay.negative'],
      borderColorPress: tokens['border.negative-secondary'],
      color: tokens['content.negative-primary'],
    }),
    'brand-extra': (tokens) => ({
      backgroundHover: tokens['overlay.brand-extra'],
      backgroundPress: tokens['overlay.brand-extra'],
      borderColorPress: tokens['border.brand-extra-secondary'],
      color: tokens['content.brand-extra-primary'],
    }),
  },
);
