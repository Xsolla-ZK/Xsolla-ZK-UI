import {
  SLIDER_COMPONENT_NAME,
  SLIDER_KNOB_NAME,
  SLIDER_TRACK_ACTIVE_NAME,
  SLIDER_TRACK_NAME,
} from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const sliderTheme = createComponentTheme(SLIDER_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));

export const sliderTrackTheme = createComponentTheme(SLIDER_TRACK_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));

export const sliderTrackActiveTheme = createComponentTheme(SLIDER_TRACK_ACTIVE_NAME, (tokens) => ({
  background: tokens['background.neutral-high'],
}));

export const sliderKnobTheme = createComponentTheme(SLIDER_KNOB_NAME, (tokens) => ({
  background: tokens['background.brand-high'],
  borderColor: tokens['border.brand-primary'],
}));
