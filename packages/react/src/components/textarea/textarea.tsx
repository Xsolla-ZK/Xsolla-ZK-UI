import { withStaticProperties } from '@tamagui/core';
import { Input } from '../input/input';
import { InputContext, InputEndSlot, InputStartSlot } from '../input/input.styled';
import type { InputProps } from '../input/input.types';
import type { ForwardedRef } from 'react';

const TextAreaBase = Input.styleable<InputProps>(
  ({ rows, ...props }, ref: ForwardedRef<HTMLInputElement>) => (
    <Input {...props} rows={rows} tag="textarea" whiteSpace="pre-wrap" ref={ref} />
  ),
);

export const TextArea = withStaticProperties(TextAreaBase, {
  Props: InputContext.Provider,
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
