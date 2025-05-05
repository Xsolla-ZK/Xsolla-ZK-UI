/* eslint-disable @typescript-eslint/ban-ts-comment */
import { styled, Text, useComposedRefs } from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { useChildrenArray } from '@xsolla-zk/react/hooks/use-children-array';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import { isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { INPUT_COMPONENT_NAME } from './input.constants';
import { InputEndSlot, InputContext, InputFrame, InputStartSlot } from './input.styled';
import type { InputProps, InputSizes } from './input.types';
import type { ForwardedRef, KeyboardEvent, ReactElement } from 'react';
import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputContentSizeChangeEventData,
} from 'react-native';

const StyledInput = styled(
  TextInput,
  {
    name: INPUT_COMPONENT_NAME,
    context: InputContext,

    alignSelf: 'stretch',
    borderWidth: 0,
    padding: 0,
    outlineWidth: 0,
    backgroundColor: 'transparent',
    color: '$color',
    flex: 1,

    variants: {
      size: (val: InputSizes, _extras) => {
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

export const Input = StyledInput.styleable<InputProps>(
  (props: InputProps, forwardedRef: ForwardedRef<TextInput>) => {
    const {
      // properties we handle separately
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
    const lineHeight = useRef(0);
    const isInteractingWithFrame = useRef(false);

    const { startSlot, endSlot } = useMemo(() => {
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
        startSlot: start,
        endSlot: end,
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
    const isAutoResizeEnabled = multiline && !props.height;

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
      height: isAutoResizeEnabled ? textInputHeight : props.height,
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

    return (
      <InputFrame
        size={size}
        focused={!finalProps.readOnly ? focused : false}
        disabled={disabled}
        theme={error ? 'error' : undefined}
        onPressIn={() => {
          isInteractingWithFrame.current = true;
        }}
        onPressOut={() => {
          isInteractingWithFrame.current = false;
        }}
        onPress={() => {
          if (finalProps.readOnly) return;
          ref.current?.focus();
        }}
      >
        {startSlot}
        <StyledInput
          {...(!finalProps.readOnly
            ? {
                onFocus: (e) => {
                  setFocused(true);
                  onFocus?.(e);
                },
                onBlur: (e) => {
                  if (!isInteractingWithFrame.current) {
                    setFocused(false);
                    onBlur?.(e);
                  }
                },
              }
            : {})}
          {...finalProps}
          ref={composedRefs}
        />
        {endSlot}
      </InputFrame>
    );
  },
  { disableTheme: true },
);
