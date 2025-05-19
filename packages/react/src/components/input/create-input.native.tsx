/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useComposedRefs, type GetProps, type TamaguiElement } from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { forwardRef, useEffect, useRef, useState } from 'react';
import {
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  type TextInputContentSizeChangeEventData,
} from 'react-native';
import type { InputElementProps } from './input.types';
import type { TamaguiComponent } from '@tamagui/core';
import type { ForwardedRef, KeyboardEvent } from 'react';
import type { TextInput, TextInputProps } from 'react-native';

export function createInput<T extends TamaguiComponent>(Element: T) {
  return Element.styleable<GetProps<T>>(
    forwardRef((_props: InputElementProps, forwardedRef: ForwardedRef<TamaguiElement>) => {
      const Component = Element as unknown as TamaguiComponent<TextInputProps>;
      const {
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
        onContentSizeChange,
        error,
        tag,
        ...rest
      } = _props;

      const ref = useRef<TextInput>(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const [textInputHeight, setTextInputHeight] = useState<number | undefined>(undefined);
      const lineHeight = useRef(0);

      useEffect(() => {
        if (!id || disabled) return;

        return registerFocusable(id, {
          focusAndSelect: () => {
            ref.current?.focus();
          },
          focus: () => {},
        });
      }, [id, disabled]);

      // Configure native properties
      let _returnKeyType = returnKeyType;
      let _enterKeyHint = enterKeyHint;
      if (enterKeyHint === 'go') {
        _returnKeyType = 'go';
        _enterKeyHint = undefined;
      }

      let _inputMode = inputMode;

      // Configure inputMode based on type
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

      // Disable keyboard if specified inputMode
      let showSoftInputOnFocus = true;
      if (inputMode === 'none') {
        showSoftInputOnFocus = false;
      }

      const multiline = Boolean(rows || minRows || maxRows);

      // Content size change handler
      const handleContentSizeChange = (
        e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
      ) => {
        if (!multiline) return;

        const { contentSize } = e.nativeEvent;

        // If this is the first measurement, get the line height
        if (lineHeight.current === 0) {
          // Use a more accurate estimate of the line height
          lineHeight.current = contentSize.height;
        }

        // Determine min and max height with additional padding for line breaks
        const paddingForLineBreaks = 4; // Small padding for better visibility of new lines
        const minHeight = minRows * (lineHeight.current || contentSize.height);
        const maxHeight = maxRows * (lineHeight.current || contentSize.height);

        // Apply constraints to new height and add padding for line breaks
        const heightWithPadding = contentSize.height + paddingForLineBreaks;
        const newHeight = Math.max(minHeight, Math.min(heightWithPadding, maxHeight));

        setTextInputHeight(newHeight);

        // Call original handler if it exists
        onContentSizeChange?.(e);
      };

      // Determine if should auto resize
      const isAutoResizeEnabled = multiline && !rest.height;

      // Form final props for native component
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
        // Apply handler only if auto resize is enabled
        onContentSizeChange: isAutoResizeEnabled ? handleContentSizeChange : onContentSizeChange,
        height: isAutoResizeEnabled ? textInputHeight : rest.height,
        // Add styles for better multiline support
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

      return <Component {...finalProps} ref={composedRefs} />;
    }),
    {
      disableTheme: true,
    },
  );
}
