import type { Direction } from './slider.types';

export const SLIDER_COMPONENT_NAME = 'Slider';
export const SLIDER_KNOB_NAME = 'SliderKnob';
export const SLIDER_TRACK_NAME = 'SliderTrack';
export const SLIDER_TRACK_ACTIVE_NAME = 'SliderTrackActive';

export const PAGE_KEYS = ['PageUp', 'PageDown'];
export const ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
export const BACK_KEYS: Record<Direction, string[]> = {
  ltr: ['ArrowDown', 'Home', 'ArrowLeft', 'PageDown'],
  rtl: ['ArrowDown', 'Home', 'ArrowRight', 'PageDown'],
};
