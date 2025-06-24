import { withStaticProperties } from '@tamagui/core';
import { forwardRef, type ForwardedRef } from 'react';
import { Input } from '../input';
import { InputContext, InputEndSlot, InputStartSlot } from '../input/input.styled';
import type { InputProps } from '../input/input.types';

const TextAreaBase = Input.styleable(
  forwardRef(({ rows, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <Input {...props} rows={rows} tag="textarea" whiteSpace="pre-wrap" ref={ref} />
  )),
);

export const TextArea = withStaticProperties(TextAreaBase, {
  Props: InputContext.Provider,
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
