import { createComponentTheme } from '@xsolla-zk/config';
import { LOADER_COMPONENT_NAME } from './loader.constants';

export const loaderTheme = createComponentTheme(
  LOADER_COMPONENT_NAME,
  (tokens) => ({
    color: tokens['border.neutral-secondary'],
    spinColor: tokens['border.brand-primary'],
  }),
  {
    'on-light': (tokens) => ({
      color: tokens['background.static-dark-high'],
      spinColor: tokens['background.brand-high'],
    }),
    'on-dark': (tokens) => ({
      color: tokens['background.static-light-high'],
      spinColor: tokens['background.brand-high'],
    }),
    'on-brand': (tokens) => ({
      color: tokens['background.static-light-high'],
      spinColor: tokens['background.static-dark-high'],
    }),
  },
);
