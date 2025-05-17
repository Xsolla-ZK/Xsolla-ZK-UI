import { createComponentTheme } from '@xsolla-zk/config';
import {
  PROGRESS_BAR_ACTIVE_TRACK_NAME,
  PROGRESS_BAR_COMPONENT_NAME,
} from './progress-bar.constants';

export const progressBarTheme = createComponentTheme(PROGRESS_BAR_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));

export const progressBarActiveTrackTheme = createComponentTheme(
  PROGRESS_BAR_ACTIVE_TRACK_NAME,
  (tokens) => ({
    background: tokens['background.neutral-high'],
  }),
);
