import { createComponentTheme } from '@xsolla-zk/config';
import { BADGE_COMPONENT_NAME } from './badge.constants';

export const badgeTheme = createComponentTheme(
  BADGE_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['background.brand-high'],
    color: tokens['content.on-brand'],
  }),
  {
    neutral: (tokens) => ({
      background: tokens['background.neutral-low'],
      color: tokens['content.neutral-primary'],
    }),
    positive: (tokens) => ({
      background: tokens['background.positive-low'],
      color: tokens['content.positive-primary'],
    }),
    warning: (tokens) => ({
      background: tokens['background.warning-low'],
      color: tokens['content.warning-primary'],
    }),
    info: (tokens) => ({
      background: tokens['background.info-low'],
      color: tokens['content.info-primary'],
    }),
    negative: (tokens) => ({
      background: tokens['background.negative-low'],
      color: tokens['content.negative-primary'],
    }),
    'brand-extra': (tokens) => ({
      background: tokens['background.brand-extra-low'],
      color: tokens['content.brand-extra-primary'],
    }),
  },
);
