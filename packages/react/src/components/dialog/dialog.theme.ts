import { createComponentTheme } from '@xsolla-zk/config';
import { DIALOG_CONTENT_COMPONENT_NAME, DIALOG_OVERLAY_COMPONENT_NAME } from './dialog.constants';

export const dialogContentTheme = createComponentTheme(DIALOG_CONTENT_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-1'],
}));

export const dialogOverlayTheme = createComponentTheme(DIALOG_OVERLAY_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-scrim'],
}));
