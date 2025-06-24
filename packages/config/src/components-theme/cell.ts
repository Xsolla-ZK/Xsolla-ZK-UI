import { CELL_BOARD_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const cellBoardTheme = createComponentTheme(CELL_BOARD_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));
