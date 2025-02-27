import { forwardRef, useRef } from 'react';
import XZKUIField from '../field/field';
import XZKUIInput from '../input/input';
import Styled from './otp-field.styled';
import type { XZKUIOtpFieldProps } from './otp-field.types';
import type { ChangeEvent, ClipboardEvent, ForwardedRef, KeyboardEvent } from 'react';

const replaceAt = (string: string, index: number, replace: string) =>
  string.substring(0, index) + replace + string.substring(index + 1);

const XZKUIOtpField = forwardRef(function XZKUIOtpField(
  {
    length = 4,
    name,
    values,
    id,
    onChange,
    onPasteError,
    className,
    hint,
    hintValue,
    error,
    errorValue,
    label,
    labelValue,
    ...rest
  }: XZKUIOtpFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const inputRefs = useRef<Array<HTMLDivElement | null>>(
    Array(length).fill(null) as Array<HTMLDivElement | null>,
  );
  const currentValue = useRef(' '.repeat(length));

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
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
          ? (inputRefs.current[index + 1]?.firstChild as HTMLInputElement | undefined)
          : e.target;

      if (newTarget) {
        newTarget.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const target = e.currentTarget;
    const nextTarget = inputRefs.current[index + 1]?.firstChild as HTMLInputElement | undefined;
    const prevTarget = inputRefs.current[index - 1]?.firstChild as HTMLInputElement | undefined;

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
      const input = inputRefs.current[idx]?.firstChild as HTMLInputElement | undefined;
      if (input) input.value = char;
    });
    currentValue.current =
      pastedData.length < length
        ? pastedData + currentValue.current.substring(pastedData.length)
        : pastedData;

    onChange?.(currentValue.current);
  };

  return (
    <XZKUIField
      className={className}
      label={label}
      labelValue={labelValue}
      error={error}
      errorValue={errorValue}
      hint={hint}
      hintValue={hintValue}
    >
      <XZKUIField.Control
        render={(context) => (
          <Styled.Main ref={ref}>
            {Array(length)
              .fill('')
              .map((val, idx) => (
                <XZKUIInput
                  key={`wtf-input-code-${id}:${idx}`}
                  inputMode="numeric"
                  // slots={{ root: Styled.Root }}
                  autoComplete="otp"
                  onPaste={handleOnPaste}
                  slotProps={{
                    root: {
                      onFocus: (e) => {
                        const input = e.currentTarget.firstChild as HTMLInputElement;
                        input.select();
                      },
                    },
                  }}
                  name={`${name}.${idx}`}
                  onChange={(e) => handleChange(e, idx)}
                  ref={(elem) => (inputRefs.current[idx] = elem)}
                  defaultValue={values[idx] ?? val}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  {...rest}
                  {...context}
                />
              ))}
          </Styled.Main>
        )}
      />
    </XZKUIField>
  );
});

export default XZKUIOtpField;
