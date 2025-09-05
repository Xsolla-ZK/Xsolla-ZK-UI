import type {
  SegmentedControlFrame,
  SegmentedControlSegmentFrame,
} from './segmented-control.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, TamaguiElement } from '@tamagui/core';
import type { RefObject } from 'react';

export type SegmentedControlSizes = keyof ComponentsConfig['segmentedControl'] | (string & {});

export type SegmentedControlSegmentPlacement = 'left' | 'right';

export type SegmentedControlContextValue = {
  baseId: string;
  value: string;
  onChange: (value: string) => void;
  orientation: 'horizontal' | 'vertical';
  dir: 'ltr' | 'rtl';
  activationMode: 'manual' | 'automatic';
  size: SegmentedControlSizes;
  registerSegment: (value: string) => void;
  unregisterSegment: (value: string) => void;
  segments: Record<string, number>;
  containerRef: RefObject<TamaguiElement | null> | null;
};

type SegmentedControlFrameSharedProps = GetProps<typeof SegmentedControlFrame>;

export type SegmentedControlProps = SegmentedControlFrameSharedProps & {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  dir?: 'ltr' | 'rtl';
  activationMode?: 'manual' | 'automatic';
  loop?: boolean;
};

export type SegmentedControlSegmentProps = GetProps<typeof SegmentedControlSegmentFrame> & {
  value: string;
  disabled?: boolean;
  disableActiveTheme?: boolean;
  onInteraction?: (type: 'select' | 'hover' | 'focus', value: string) => void;
};
