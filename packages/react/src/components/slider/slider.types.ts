import type { SliderFrame, SliderKnobFrame } from './slider.styled';
import type { ComponentsConfig } from '../../utils';
import type { GestureReponderEvent, GetProps, StackProps, TamaguiElement } from '@tamagui/core';
import type { AriaAttributes, KeyboardEvent, RefObject } from 'react';

export type SliderSizes = keyof ComponentsConfig['slider'] | (string & {});

export type SliderContextType = {
  size?: SliderSizes;
  disabled?: boolean;
  min: number;
  max: number;
  values: number[];
  valueIndexToChangeRef: RefObject<number>;
  thumbs: Map<TamaguiElement, number>;
  orientation: SliderProps['orientation'];
};

export type Direction = 'ltr' | 'rtl';

type SliderEventProps = {
  onSlideStart?: (event: GestureReponderEvent, value: number, target: 'thumb' | 'track') => void;
  onSlideMove?: (event: GestureReponderEvent, value: number) => void;
  onSlideEnd?: (event: GestureReponderEvent, value: number) => void;
};

type SliderImplPrivateProps = {
  onSlideStart: (event: GestureReponderEvent, target: 'thumb' | 'track') => void;
  onSlideMove: (event: GestureReponderEvent) => void;
  onSlideEnd: (event: GestureReponderEvent) => void;
  onHomeKeyDown: (event: KeyboardEvent) => void;
  onEndKeyDown: (event: KeyboardEvent) => void;
  onStepKeyDown: (event: KeyboardEvent) => void;
};

export type SliderTrackProps = GetProps<typeof SliderFrame>;

export interface SliderImplProps extends SliderTrackProps, SliderImplPrivateProps {
  dir?: Direction;
  size?: SliderSizes;
  orientation: 'horizontal' | 'vertical';
  onResponderGrant?: (event: GestureReponderEvent) => void;
  onResponderMove?: (event: GestureReponderEvent) => void;
  onResponderRelease?: (event: GestureReponderEvent) => void;
}

type SliderOrientationPrivateProps = {
  min: number;
  max: number;
  onSlideStart?: (value: number, target: 'thumb' | 'track', event: GestureReponderEvent) => void;
  onSlideMove?: (value: number, event: GestureReponderEvent) => void;
  onSlideEnd?: (event: GestureReponderEvent, value: number) => void;
  onHomeKeyDown: (event: KeyboardEvent) => void;
  onEndKeyDown: (event: KeyboardEvent) => void;
  onStepKeyDown: (step: { event: KeyboardEvent; direction: number }) => void;
};

interface SliderOrientationProps
  extends Omit<SliderImplProps, keyof SliderImplPrivateProps | 'orientation'>,
    SliderOrientationPrivateProps {}

export interface SliderHorizontalProps extends SliderOrientationProps {
  dir?: Direction;
}

export interface SliderVerticalProps extends SliderOrientationProps {
  dir?: Direction;
}

export interface SliderProps
  extends Omit<SliderHorizontalProps, keyof SliderOrientationPrivateProps | 'defaultValue'>,
    SliderEventProps {
  size?: SliderSizes;
  name?: string;
  disabled?: boolean;
  orientation?: AriaAttributes['aria-orientation'];
  dir?: Direction;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
}

interface SliderKnobExtraProps {
  index: number;
}

export interface SliderKnobProps extends GetProps<typeof SliderKnobFrame>, SliderKnobExtraProps {
  size?: SliderSizes;
}
