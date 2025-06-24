import { DIALOG_CONTENT_COMPONENT_NAME, DIALOG_OVERLAY_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const dialogContentTheme = createComponentTheme(DIALOG_CONTENT_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-1'],
}));

export const dialogOverlayTheme = createComponentTheme(DIALOG_OVERLAY_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-scrim'],
}));
