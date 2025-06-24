import { PIMPLE_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const pimpleTheme = createComponentTheme(PIMPLE_COMPONENT_NAME, (tokens) => ({
  background: tokens['background.negative-high'],
  color: tokens['content.static-light-primary'],
}));
