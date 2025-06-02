import { createComponentTheme } from '@xsolla-zk/config';
import { SNACK_BAR_COMPONENT_NAME } from './snack-bar.constants';

export const snackBarTheme = createComponentTheme(SNACK_BAR_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-1'],
}));
