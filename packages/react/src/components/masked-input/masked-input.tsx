import { withStaticProperties } from '@tamagui/core';
import { useMask } from '../../hooks/use-mask';
import { Input } from '../input/input';
import { InputContext, InputEndSlot, InputStartSlot } from '../input/input.styled';
import type { MaskedInputProps } from './masked-input.types';
import type { ChangeEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';

function MaskedInputBase({
  mask,
  value,
  onChange,
  onChangeText,
  onKeyDown,
  ...props
}: MaskedInputProps) {
  const {
    value: maskedValue,
    handleChange,
    handleKeyDown,
    inputRef,
    isMaxLengthReached,
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
        const target = e.target as HTMLInputElement;
        handleChange(target.value);
        onChange?.(e as ChangeEvent<HTMLInputElement>);
      }}
      onKeyDown={(e) => {
        handleKeyDown(e.nativeEvent);
        onKeyDown?.(e);
      }}
    />
  );
}

export const MaskedInput = withStaticProperties(MaskedInputBase, {
  Props: InputContext.Provider,
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
