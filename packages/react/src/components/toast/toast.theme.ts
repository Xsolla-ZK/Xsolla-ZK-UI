import { createComponentTheme } from '@xsolla-zk/config';
import { TOAST_COMPONENT_NAME } from './toast.constants';

export const toastTheme = createComponentTheme(TOAST_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));
