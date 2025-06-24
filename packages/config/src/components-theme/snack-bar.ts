import { SNACK_BAR_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const snackBarTheme = createComponentTheme(SNACK_BAR_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-1'],
}));
