import { Stack } from '@tamagui/core';
import { PROGRESS_BAR_ACTIVE_TRACK_NAME, PROGRESS_BAR_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  smartContextStyled,
} from '../../utils';
import type { ProgressBarContextType, ProgressBarSizes } from './progress-bar.types';

export const ProgressBarContext = createStyledMediaContext(
  {
    size: '$500',
    value: 0,
  } as ProgressBarContextType,
  ['size'],
);

export const ProgressBarFrame = smartContextStyled(Stack, {
  name: PROGRESS_BAR_COMPONENT_NAME,
  position: 'relative',
  backgroundColor: '$background',
  variants: {
    size: (val: ProgressBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.progressBar[val as keyof typeof config.progressBar];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
    },
  } as const,
});

export const ProgressBarActiveTrack = smartContextStyled(Stack, {
  name: PROGRESS_BAR_ACTIVE_TRACK_NAME,
  position: 'absolute',
  // animation: 'pop',
  backgroundColor: '$background',

  variants: {
    size: (val: ProgressBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.progressBar[val as keyof typeof config.progressBar];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
    },
  } as const,
});
