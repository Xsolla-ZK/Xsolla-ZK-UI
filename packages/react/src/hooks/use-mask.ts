import parsePhoneNumberFromString, { AsYouType } from 'libphonenumber-js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { applyMask, maskText, unMaskText } from '../utils/mask-utils';
import type { MaskType } from '../types/mask';
import type { CountryCode } from 'libphonenumber-js';

interface UseMaskProps {
  initialValue?: string;
  mask: MaskType;
  onChange?: (maskedValue: string, rawValue: string) => void;
}

export function useMask({ initialValue = '', mask, onChange }: UseMaskProps) {
  const prefix = typeof mask === 'object' && mask.prefix ? mask.prefix : '';
  const lockPrefix = typeof mask === 'object' && mask.lockPrefix ? mask.lockPrefix : true;
  const includePrefixInRawValue =
    typeof mask === 'object' && mask.includePrefixInRawValue ? mask.includePrefixInRawValue : false;

  const [value, setValue] = useState(() => applyMask(initialValue, mask));
  const [isMaxLengthReached, setMaxLengthReached] = useState(false);
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Считает количество форматных символов между двумя строками
  const countFormatCharsBetween = useCallback(
    (oldStr: string, newStr: string, position: number): number => {
      let count = 0;
      const minLength = Math.min(position, newStr.length);

      for (let i = 0; i < minLength; i++) {
        if (!/\d/.test(newStr[i]) && (i >= oldStr.length || oldStr[i] !== newStr[i])) {
          count++;
        }
      }

      return count;
    },
    [],
  );

  // Вспомогательная функция для расчета позиции курсора
  const calculateCursorPosition = useCallback(
    (prevValue: string, newValue: string, currentPosition: number): number => {
      // Если значения идентичны, не меняем позицию
      if (prevValue === newValue) return currentPosition;

      // Если добавили символ
      if (newValue.length > prevValue.length) {
        // Учитываем сколько символов форматирования добавилось
        const addedFormatChars = countFormatCharsBetween(prevValue, newValue, currentPosition);
        return currentPosition + addedFormatChars + 1;
      }

      // Если удалили символ
      return currentPosition;
    },
    [countFormatCharsBetween],
  );

  // Вспомогательная функция для нахождения предыдущей позиции цифры
  const findPreviousDigitPosition = useCallback((text: string): number => {
    for (let i = text.length - 1; i >= 0; i--) {
      if (/\d/.test(text[i])) {
        return i;
      }
    }
    return 0;
  }, []);

  // Функция для форматирования ввода и получения raw значения
  const format = useCallback(
    (text: string) => {
      let currVal = text;

      // Обработка префикса
      if (prefix && lockPrefix) {
        if (!currVal.startsWith(prefix)) {
          currVal = prefix + (currVal.startsWith('+') ? currVal.slice(1) : currVal);
        }
      }

      const masked = applyMask(currVal, mask);
      let raw = unMaskText(masked);

      if (includePrefixInRawValue && prefix && lockPrefix) {
        if (!raw.startsWith(prefix)) {
          raw = prefix + raw;
        }
      }

      return { masked, raw };
    },
    [mask, prefix, lockPrefix, includePrefixInRawValue],
  );

  // Основная функция обработки изменения ввода
  const handleChange = useCallback(
    (text: string, prevValue = value) => {
      const { masked, raw } = format(text);

      // Контроль максимальной длины телефонного номера
      if (typeof mask === 'object' && mask.type === 'phone') {
        const phone = parsePhoneNumberFromString(masked, mask.region as CountryCode);
        const isValid = phone?.isValid() ?? false;
        const maxLength = phone?.nationalNumber?.length ?? Infinity;

        if (isValid && raw.length >= maxLength) {
          setMaxLengthReached(true);
        } else {
          setMaxLengthReached(false);
        }
      }

      // Рассчитываем позицию курсора
      if (inputRef.current) {
        const newCursorPosition = calculateCursorPosition(
          prevValue,
          masked,
          inputRef.current.selectionStart || 0,
        );
        setSelectionStart(newCursorPosition);
      }

      setValue(masked);
      onChange?.(masked, raw);
    },
    [format, onChange, mask, value, calculateCursorPosition],
  );

  // Обработка нажатия клавиши Backspace для правильного удаления символов
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Backspace' && inputRef.current) {
        const cursorPosition = inputRef.current.selectionStart || 0;

        // Предотвращаем удаление префикса
        if (lockPrefix && prefix && cursorPosition <= prefix.length) {
          e.preventDefault();
          return;
        }

        // Специальная обработка для маски телефона
        if (typeof mask === 'object' && mask.type === 'phone') {
          const valueBeforeCursor = value.substring(0, cursorPosition);
          const valueAfterCursor = value.substring(cursorPosition);

          // Если курсор находится после форматного символа (не цифры)
          if (cursorPosition > 0 && !/\d/.test(value[cursorPosition - 1])) {
            e.preventDefault();
            const newPosition = findPreviousDigitPosition(valueBeforeCursor);
            const newValue = valueBeforeCursor.substring(0, newPosition) + valueAfterCursor;
            handleChange(newValue, value);
          }
        }
      }
    },
    [value, prefix, lockPrefix, mask, handleChange, findPreviousDigitPosition],
  );

  // Установка позиции курсора после рендера
  useEffect(() => {
    if (inputRef.current && selectionStart !== null) {
      inputRef.current.setSelectionRange(selectionStart, selectionStart);
      setSelectionStart(null);
    }
  }, [selectionStart, value]);

  return {
    value,
    rawValue: useMemo(() => {
      const raw = unMaskText(value);
      return includePrefixInRawValue && prefix && lockPrefix ? prefix + raw : raw;
    }, [value, includePrefixInRawValue, prefix, lockPrefix]),
    setValue: handleChange,
    handleChange,
    handleKeyDown,
    isMaxLengthReached,
    inputRef,
    props: {
      value,
      onChangeText: handleChange,
      onKeyDown: handleKeyDown,
      ref: inputRef,
    },
  };
}
