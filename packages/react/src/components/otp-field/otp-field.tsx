import { type TamaguiElement } from '@tamagui/core';
import { useId, useRef } from 'react';
import { Input } from '../input';
import { OTPFieldFrame } from './otp-field.styled';
import type { OTPFieldProps } from './otp-field.types';
import type { ChangeEvent, ClipboardEvent, ForwardedRef, KeyboardEvent } from 'react';

const replaceAt = (string: string, index: number, replace: string) =>
  string.substring(0, index) + replace + string.substring(index + 1);

const OTPFieldComponent = OTPFieldFrame.styleable<OTPFieldProps>(
  (props, ref: ForwardedRef<TamaguiElement>) => {
    const {
      length = 4,
      id: propId,
      onChange,
      onPasteError,
      name,
      size = '$500',
      value,
      defaultValue,
      ...rest
    } = props;
    const id = propId ?? useId();
    const inputRefs = useRef<Array<HTMLInputElement | null>>(
      Array(length).fill(null) as Array<HTMLInputElement | null>,
    );
    const currentValue = useRef(' '.repeat(length));

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const value = e.target.value;

      if (value !== '') {
        if (value.length > 1) {
          const newVal = value.indexOf(currentValue.current[index])
            ? value.slice(0, 1)
            : value.slice(-1);
          const input = e.target;
          input.value = newVal;
          currentValue.current = replaceAt(currentValue.current, index, newVal);
          onChange?.(currentValue.current);
        } else {
          currentValue.current = replaceAt(currentValue.current, index, value);
          onChange?.(currentValue.current);
        }

        const newTarget =
          index < length - 1
            ? (inputRefs.current[index + 1] as HTMLInputElement | undefined)
            : e.target;

        if (newTarget) {
          newTarget.focus();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      const target = e.currentTarget;
      const nextTarget = inputRefs.current[index + 1] as HTMLInputElement | undefined;
      const prevTarget = inputRefs.current[index - 1] as HTMLInputElement | undefined;

      if (
        !/[0-9]/.test(e.key) &&
        !((e.ctrlKey || e.metaKey) && e.code === 'KeyV') &&
        e.key !== 'Tab' &&
        e.key !== 'Enter'
      ) {
        e.preventDefault();
      }

      if (e.key === 'Backspace' || e.key === 'Delete') {
        target.value = '';
        currentValue.current = replaceAt(currentValue.current, index, ' ');
        onChange?.(currentValue.current);
        if (prevTarget) {
          prevTarget.focus();
        }
      }

      if (e.key === 'ArrowLeft') {
        if (prevTarget) {
          prevTarget.focus();
        }
      }
      if (e.key === 'ArrowRight') {
        if (nextTarget) {
          nextTarget.focus();
        }
      }
    };

    const handleOnPaste = (e: ClipboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length * 2)
        .replace(/\s/g, '')
        .slice(0, length);

      if (/\D+/g.test(pastedData)) {
        return onPasteError?.(10);
      }

      pastedData.split('').forEach((char, idx) => {
        const input = inputRefs.current[idx] as HTMLInputElement | undefined;
        if (input) input.value = char;
      });
      currentValue.current =
        pastedData.length < length
          ? pastedData + currentValue.current.substring(pastedData.length)
          : pastedData;

      onChange?.(currentValue.current);
    };

    return (
      <OTPFieldFrame size={size} ref={ref}>
        {Array.from({ length }, () => '').map((val, idx) => (
          <Input
            key={`input-code-${id}:${idx}`}
            id={idx === 0 ? id : `${id}-${idx}`}
            inputMode="numeric"
            autoComplete="one-time-code"
            textContentType="oneTimeCode"
            size={size}
            onPaste={handleOnPaste}
            onFocus={(e) => {
              const input = e.currentTarget as HTMLInputElement;
              input.select();
            }}
            name={name ? `${name}.${idx}` : undefined}
            onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>, idx)}
            ref={(elem: HTMLInputElement) => (inputRefs.current[idx] = elem)}
            defaultValue={value === undefined ? defaultValue?.[idx] : undefined}
            value={value !== undefined ? (value?.[idx] ?? val) : undefined}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            maxLength={length}
            selectTextOnFocus
            enterKeyHint={idx === length - 1 ? 'done' : 'next'}
            width="100%"
            textAlign="center"
            frameStyles={{ flex: 1 }}
            {...rest}
          />
        ))}
      </OTPFieldFrame>
    );
  },
);

export const OTPField = OTPFieldComponent;
