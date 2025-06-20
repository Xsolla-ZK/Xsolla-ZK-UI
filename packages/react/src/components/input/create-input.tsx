import { isWeb, useComposedRefs, useTheme, type GetProps } from '@tamagui/core';
import { registerFocusable, useFocusable } from '@tamagui/focusable';
import { forwardRef, useEffect, useMemo, useRef } from 'react';
import type { InputElementBaseProps, InputElementProps } from './input.types';
import type { TamaguiComponent, TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, KeyboardEvent, RefObject } from 'react';
import type { ColorValue, TextInput } from 'react-native';

export function createInput<T extends TamaguiComponent>(Element: T) {
  return Element.styleable<GetProps<T>>(
    forwardRef((_props: InputElementProps, forwardedRef: ForwardedRef<TamaguiElement>) => {
      const Component = Element as unknown as TamaguiComponent<InputElementBaseProps>;
      const ref = useRef<TextInput>(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);

      const { size = '$500', type, id, rows, minRows = 1, maxRows, ...restProps } = _props;

      const inputProps = useInputProps({ ...restProps, type, rows, minRows, maxRows }, ref);

      useEffect(() => {
        if (!id || !inputProps.editable) return;
        return registerFocusable(id, {
          focusAndSelect: () => {
            ref.current?.focus();
          },
          focus: () => {},
        });
      }, [id, inputProps.editable]);

      // const [height, setHeight] = useState<number>();

      // const handleContentSizeChange = (
      //   e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
      // ) => {
      //   const contentHeight = e.nativeEvent.contentSize.height;
      //   setHeight(contentHeight);
      // };

      // const handleLayout = (e: LayoutChangeEvent) => {
      //   if (!isWeb) return;
      //   const el = e.target as unknown as HTMLTextAreaElement;
      //   if (!el) return;

      //   const computedStyle = window.getComputedStyle(el);
      //   const lineHeight =
      //     parseFloat(computedStyle.lineHeight) || parseFloat(computedStyle.fontSize) * 1.2;

      //   const minHeight = minRows * lineHeight;
      //   const maxHeight = maxRows ? maxRows * lineHeight : Infinity;

      //   el.style.height = 'auto';

      //   let newHeight = Math.max(el.scrollHeight, minHeight);
      //   if (maxHeight !== Infinity) {
      //     newHeight = Math.min(newHeight, maxHeight);
      //   }

      //   el.style.height = `${newHeight}px`;
      //   el.style.overflowY = newHeight >= maxHeight ? 'auto' : 'hidden';
      // };

      // const handleInput = (e: InputEvent) => {
      //   if (!isWeb) return;
      //   handleLayout(e as unknown as LayoutChangeEvent);
      // };

      return (
        <Component
          id={id}
          size={size}
          {...inputProps}
          {...(inputProps.multiline
            ? {
                tag: 'textarea',
                rows,
                minRows,
                maxRows,
                ...(!isWeb ? { flexWrap: 'wrap' } : {}),
                overflowX: 'hidden',
                whiteSpace: 'pre-wrap',
                width: '100%',
                style: {
                  wordBreak: 'break-word',
                  resize: 'none',
                } as Record<string, unknown>,
              }
            : {})}
          ref={composedRefs}
        />
      );
    }),
    { disableTheme: true },
  );
}

function useInputProps(props: InputElementProps, ref: RefObject<TextInput | null>) {
  const {
    type,
    onKeyDown,
    onKeyUp,
    autoFocus,
    disabled,
    placeholderTextColor: placeholderProp,
    rows,
    minRows = 1,
    maxRows,
    onPaste,
    ...rest
  } = props;

  const theme = useTheme();
  const focusable = useFocusable({
    props,
    ref,
    isInput: true,
  });

  // const [text, setText] = useState('');
  // const [previousText, setPreviousText] = useState('');

  // useEffect(() => {
  //   if (text !== previousText) {
  //     // Check if the change is due to pasting (length difference is significant)
  //     if (Math.abs(text.length - previousText.length) > 1) {
  //       // Handle paste event
  //       console.log('Text pasted:', text);
  //     }
  //     setPreviousText(text);
  //   }
  // }, [text, previousText]);

  // placeholderTextColor
  const placeholderTextColor = useMemo(
    () =>
      (theme[placeholderProp as keyof typeof theme]?.get() ??
        placeholderProp ??
        theme.placeholderColor?.get()) as ColorValue,
    [placeholderProp, theme],
  );

  // keyboardType по type
  const keyboardType = useMemo<NonNullable<InputElementProps['keyboardType']>>(() => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'tel':
        return 'phone-pad';
      case 'url':
        return 'url';
      case 'search':
        return 'web-search';
      case 'number':
      case 'numeric':
        return 'numeric';
      case 'decimal':
        return 'decimal-pad';
      default:
        return 'default';
    }
  }, [type]);

  const multiline = Boolean(rows || minRows > 1);
  const numberOfLines = rows || Math.max(minRows, 1);

  return useMemo<InputElementBaseProps>(
    () => ({
      ref: focusable.ref,

      // editable ↔ disabled
      editable: !disabled,

      // placeholder
      placeholderTextColor,

      // password ↔ secureTextEntry
      secureTextEntry: type === 'password',

      // inputMode - keyboardType
      keyboardType,

      // rows - numberOfLines
      multiline,
      numberOfLines,
      tag: multiline ? 'textarea' : undefined,

      // autoFocus
      autoFocus,

      // onKeyDown/web → onKeyPress RN
      ...(onKeyDown
        ? {
            onKeyPress: (e) => {
              onKeyDown(e as unknown as KeyboardEvent<HTMLInputElement>);
            },
            onSubmitEditing: (e) => {
              onKeyDown(e as unknown as KeyboardEvent<HTMLInputElement>);
            },
          }
        : {}),

      // onChange(web) → onChangeText(RN)
      onChangeText: (text: string) => {
        // setText(text);
        focusable.onChangeText(text);
      },

      // other valid props
      ...rest,
    }),
    [
      focusable,
      disabled,
      placeholderTextColor,
      type,
      keyboardType,
      multiline,
      numberOfLines,
      autoFocus,
      rest,
      onKeyDown,
    ],
  );
}
