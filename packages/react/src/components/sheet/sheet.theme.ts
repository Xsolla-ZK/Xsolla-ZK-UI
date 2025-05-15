import { createComponentTheme } from '@xsolla-zk/config';
import { SHEET_COMPONENT_NAME, SHEET_OVERLAY_COMPONENT_NAME } from './sheet.constants';

export const sheetTheme = createComponentTheme(SHEET_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-1'],
}));

export const sheetOverlayTheme = createComponentTheme(SHEET_OVERLAY_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-scrim'],
}));
