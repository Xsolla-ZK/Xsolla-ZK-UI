import { createComponentTheme } from '@xsolla-zk/config';
import { CELL_BOARD_COMPONENT_NAME } from './cell.constants';

export const cellBoardTheme = createComponentTheme(CELL_BOARD_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));
