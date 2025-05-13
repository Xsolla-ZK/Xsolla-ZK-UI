import { withStaticProperties } from '@tamagui/core';
import { SwitchKnob } from './switch.styled';
import { SwitchFrame } from './switch.styled';

export const Switch = withStaticProperties(SwitchFrame, {
  Knob: SwitchKnob,
});
