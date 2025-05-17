import { createComponentTheme } from '@xsolla-zk/config';
import {
  SEGMENTED_CONTROL_COMPONENT_NAME,
  SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
} from './segmented-control.constants';

export const segmentedControlTheme = createComponentTheme(
  SEGMENTED_CONTROL_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['overlay.neutral'],
    borderColor: tokens['border.neutral-secondary'],
  }),
);

export const segmentedControlSegmentTheme = createComponentTheme(
  SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
  (tokens) => ({
    background: 'transparent',
    borderColor: 'transparent',
    color: tokens['content.neutral-secondary'],
  }),
  {
    active: (tokens) => ({
      background: tokens['overlay.neutral'],
      borderColor: tokens['border.neutral-secondary'],
      color: tokens['content.neutral-primary'],
    }),
  },
);
