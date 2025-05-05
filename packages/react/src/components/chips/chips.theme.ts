import { createComponentTheme } from '@xsolla-zk/config';
import { CHIP_COMPONENT_NAME } from './chips.constants';

export const chipsTheme = createComponentTheme(
  CHIP_COMPONENT_NAME,
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
    positive: (tokens) => ({
      background: tokens['background.positive-high'],
      color: tokens['content.on-positive'],
    }),
    warning: (tokens) => ({
      background: tokens['background.warning-high'],
      color: tokens['content.on-warning'],
    }),
    info: (tokens) => ({
      background: tokens['background.info-high'],
      color: tokens['content.on-info'],
    }),
    negative: (tokens) => ({
      background: tokens['background.negative-high'],
      color: tokens['content.on-negative'],
    }),
    'brand-extra': (tokens) => ({
      background: tokens['background.brand-extra-high'],
      color: tokens['content.on-brand-extra'],
    }),
  },
);
