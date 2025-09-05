import { withStaticProperties } from '@tamagui/core';
import { type ChangeEvent } from 'react';
import { useMask } from '../../hooks';
import { Input } from '../input';
import { InputEndSlot, InputStartSlot } from '../input/input.styled';
import type { MaskedInputProps } from './masked-input.types';

function MaskedInputBase({ mask, value, onChangeText, onKeyDown, ...props }: MaskedInputProps) {
  const {
    value: maskedValue,
    handleChange,
    inputRef,
  } = useMask({
    initialValue: value,
    mask,
    onChange: onChangeText,
  });

  return (
    <Input
      {...props}
      value={maskedValue}
      ref={inputRef}
      onChange={(e) => {
        handleChange(e as ChangeEvent<HTMLInputElement>);
      }}
    />
  );
}

export const MaskedInput = withStaticProperties(MaskedInputBase, {
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
