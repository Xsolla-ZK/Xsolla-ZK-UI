/* eslint-disable @typescript-eslint/ban-ts-comment */
import { styled, Text, useComposedRefs, useEvent } from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import useChildrenArray from '@xsolla-zk-ui/react/hooks/use-children-array';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk-ui/react/utils/get-mapped-styles';
import { isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import {
  TextInput,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  type TextInputContentSizeChangeEventData,
} from 'react-native';
import { INPUT_NEW_COMPONENT_NAME } from './input-new.constants';
import { InputEndSlot, InputNewContext, InputNewFrame, InputStartSlot } from './input-new.styled';
import type { InputNewProps, InputNewSizes } from './input-new.types';
import type { ForwardedRef, KeyboardEvent, ReactElement } from 'react';

const StyledInputNew = styled(
  TextInput,
  {
    name: INPUT_NEW_COMPONENT_NAME,
    context: InputNewContext,

    alignSelf: 'stretch',
    borderWidth: 0,
    padding: 0,
    outlineWidth: 0,
    backgroundColor: 'transparent',
    color: '$color',
    flex: 1,

    variants: {
      size: (val: InputNewSizes, _extras) => {
        const config = getComponentsConfig();
        const componentProps = config.input[val];

        if (!componentProps) {
          return {};
        }

        return getMappedStyles(componentProps.label);
      },
      disabled: {
        true: {},
      },
    } as const,
  },
  {
    isInput: true,
    accept: {
      placeholderTextColor: 'color',
      selectionColor: 'color',
    } as const,

    validStyles: Text.staticConfig.validStyles,
  },
);

export const InputNew = StyledInputNew.styleable<InputNewProps>(
  (props: InputNewProps, forwardedRef: ForwardedRef<TextInput>) => {
    const {
      // свойства, которые мы обрабатываем отдельно
      size,
      disabled,
      id,
      type,
      inputMode,
      enterKeyHint,
      rows,
      minRows = 1,
      maxRows = 5,
      placeholderTextColor,
      caretColor,
      returnKeyType,
      selectionColor,
      onChange,
      onInput,
      onKeyDown,
      onFocus,
      onBlur,
      onContentSizeChange,
      children,
      error,
      tag,
      ...rest
    } = props;

    const ref = useRef<TextInput>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const childrenArray = useChildrenArray(children);
    const [focused, setFocused] = useState(false);
    const [textInputHeight, setTextInputHeight] = useState<number | undefined>(undefined);
    const [lineHeight, setLineHeight] = useState(0);

    const handleFocus = useEvent(() => setFocused(true));
    const handleBlur = useEvent(() => setFocused(false));

    const { startAdornment, endAdornment } = useMemo(() => {
      let start: ReactElement | null = null;
      let end: ReactElement | null = null;

      childrenArray.forEach((child) => {
        if (isValidElement(child)) {
          if (child.type === InputStartSlot && !start) {
            start = child;
          } else if (child.type === InputEndSlot && !end) {
            end = child;
          }
        }
      });

      return {
        startAdornment: start,
        endAdornment: end,
      };
    }, [childrenArray]);

    useEffect(() => {
      if (!id || disabled) return;

      return registerFocusable(id, {
        focusAndSelect: () => {
          ref.current?.focus();
        },
        focus: () => {},
      });
    }, [id, disabled]);

    // Конфигурируем нативные свойства
    let _returnKeyType = returnKeyType;
    let _enterKeyHint = enterKeyHint;
    if (enterKeyHint === 'go') {
      _returnKeyType = 'go';
      _enterKeyHint = undefined;
    }

    let _inputMode = inputMode;

    // Настройка inputMode на основе типа
    if (type === 'email') {
      _inputMode = 'email';
    } else if (type === 'tel') {
      _inputMode = 'tel';
    } else if (type === 'search') {
      _inputMode = 'search';
    } else if (type === 'url') {
      _inputMode = 'url';
    } else if (type === 'password') {
      _inputMode = 'text';
    } else if (type === 'number') {
      _inputMode = 'numeric';
    } else {
      _inputMode = 'text';
    }

    // Отключение клавиатуры если указан определенный inputMode
    let showSoftInputOnFocus = true;
    if (inputMode === 'none') {
      showSoftInputOnFocus = false;
    }

    const multiline = tag === 'textarea' || Boolean(rows || minRows || maxRows);

    // Обработчик изменения размера содержимого
    const handleContentSizeChange = (
      e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
    ) => {
      if (!multiline) return;

      const { contentSize } = e.nativeEvent;

      // Если это первое измерение, получаем высоту строки
      if (lineHeight === 0) {
        // Используем более точную оценку высоты одной строки
        const estimatedLineHeight = contentSize.height;
        setLineHeight(estimatedLineHeight);
      }

      // Определяем минимальную и максимальную высоту с дополнительным отступом для переноса строк
      const paddingForLineBreaks = 4; // Небольшой отступ для улучшения видимости новых строк
      const minHeight = minRows * (lineHeight || contentSize.height);
      const maxHeight = maxRows * (lineHeight || contentSize.height);

      // Применяем ограничения к новой высоте и добавляем отступ для переноса строк
      const heightWithPadding = contentSize.height + paddingForLineBreaks;
      const newHeight = Math.max(minHeight, Math.min(heightWithPadding, maxHeight));

      setTextInputHeight(newHeight);

      // Вызываем оригинальный обработчик если он существует
      onContentSizeChange?.(e);
    };

    // Определяем должен ли автоматически изменяться размер
    const isAutoResizeEnabled = multiline && !props.height;

    // Формируем финальные пропсы для нативного компонента
    const finalProps = {
      ...rest,
      id,
      disabled,
      inputMode: _inputMode,
      cursorColor: caretColor,
      enterKeyHint: _enterKeyHint,
      returnKeyType: _returnKeyType,
      secureTextEntry: type === 'password',
      showSoftInputOnFocus,
      multiline: multiline ? true : undefined,
      numberOfLines: rows || undefined,
      placeholderTextColor,
      selectionColor,
      onChange: (_e: NativeSyntheticEvent<TextInputChangeEventData>) => {},
      // Применяем обработчик только если автоматическое изменение размера включено
      onContentSizeChange: isAutoResizeEnabled ? handleContentSizeChange : onContentSizeChange,
      height: isAutoResizeEnabled ? textInputHeight : props.height,
      // Добавляем стили для лучшей поддержки многострочного ввода
      style: multiline
        ? {
            ...(rest.style as object),
            textAlignVertical: 'top' as const,
          }
        : rest.style,
    };

    if (tag === 'textarea') {
      finalProps.multiline = true;
    }

    if (onKeyDown) {
      finalProps.onKeyPress = (e) => {
        const { key } = e.nativeEvent;
        if (key === 'Backspace' || (tag === 'textarea' && key === 'Enter') || key.length === 1) {
          onKeyDown({
            key,
            type: 'keydown',
          } as KeyboardEvent<HTMLInputElement>);
        }
      };
      finalProps.onSubmitEditing = (_e) => {
        onKeyDown({
          key: 'Enter',
          type: 'keydown',
        } as KeyboardEvent<HTMLInputElement>);
      };
    }

    if (onChange || onInput) {
      finalProps.onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const { text } = e.nativeEvent;
        if (onChange) {
          // @ts-ignore
          onChange({
            target: {
              value: text,
            },
            type: 'change',
          });
        }
        if (onInput != null) {
          onInput({
            target: {
              // @ts-ignore
              value: text,
            },
            type: 'input',
          });
        }
      };
    }

    return (
      <InputNewFrame
        size={size}
        focused={focused}
        disabled={disabled}
        theme={error ? 'error' : undefined}
        onPress={() => {
          ref.current?.focus();
        }}
      >
        {startAdornment}
        <StyledInputNew
          onFocus={(e) => {
            handleFocus();
            onFocus?.(e);
          }}
          onBlur={(e) => {
            handleBlur();
            onBlur?.(e);
          }}
          {...finalProps}
          ref={composedRefs}
        />
        {endAdornment}
      </InputNewFrame>
    );
  },
  { disableTheme: true },
);
