import { createComponentTheme } from '@xsolla-zk/config';
import { FIELD_COMPONENT_NAME } from './field.constants';

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
