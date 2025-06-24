import { TOAST_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const toastTheme = createComponentTheme(TOAST_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));
