import { SHEET_COMPONENT_NAME, SHEET_OVERLAY_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const sheetTheme = createComponentTheme(SHEET_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-1'],
}));

export const sheetOverlayTheme = createComponentTheme(SHEET_OVERLAY_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-scrim'],
}));
