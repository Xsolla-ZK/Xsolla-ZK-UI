import { DROPDOWN_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const dropdownTheme = createComponentTheme(DROPDOWN_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-1'],
}));
