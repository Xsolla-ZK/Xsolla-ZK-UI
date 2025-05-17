import type { ProgressBarActiveTrack, ProgressBarFrame } from './progress-bar.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils';

export type ProgressBarSizes = keyof ComponentsConfig['progressBar'];

export type ProgressBarContextType = {
  size: ProgressBarSizes;
  value: number;
};

type ProgressBarSharedProps = GetProps<typeof ProgressBarFrame>;

export type ProgressBarProps = ProgressBarSharedProps & {
  value: number;
  size?: ProgressBarSizes;
};

export type ProgressBarActiveTrackProps = GetProps<typeof ProgressBarActiveTrack>;
