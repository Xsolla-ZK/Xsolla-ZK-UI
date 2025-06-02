import { withStaticProperties } from '@tamagui/core';
import { useMask } from '../../hooks/use-mask';
import { Input } from '../input/input';
import { InputContext, InputEndSlot, InputStartSlot } from '../input/input.styled';
import type { MaskedInputProps } from './masked-input.types';
import type { ChangeEvent } from 'react';

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
  Props: InputContext.Provider,
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
