import { createComponentTheme } from '@xsolla-zk/config';
import { PIMPLE_COMPONENT_NAME } from './pimple.styled';

export const pimpleTheme = createComponentTheme(PIMPLE_COMPONENT_NAME, (tokens) => ({
  background: tokens['background.negative-high'],
  color: tokens['content.static-light-primary'],
}));
