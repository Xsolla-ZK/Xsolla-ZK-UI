import { FIELD_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const fieldTheme = createComponentTheme(
  FIELD_COMPONENT_NAME,
  (tokens) => ({
    color: tokens['content.neutral-secondary'],
  }),
  {
    error: (tokens) => ({
      color: tokens['content.negative-primary'],
    }),
  },
);
