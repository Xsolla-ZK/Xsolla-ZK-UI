import { withStaticProperties } from '@tamagui/core';
import { Input } from '../input';
import { InputEndSlot, InputStartSlot } from '../input/input.styled';
import type { InputProps } from '../input/input.types';

const TextAreaBase = Input.styleable<InputProps>(({ rows, ...props }, ref) => (
  <Input {...props} rows={rows} tag="textarea" whiteSpace="pre-wrap" ref={ref} />
));

export const TextArea = withStaticProperties(TextAreaBase, {
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
