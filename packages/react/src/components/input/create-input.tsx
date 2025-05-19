import { useComposedRefs, useTheme, type GetProps } from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { forwardRef, useEffect, useRef, useState } from 'react';
import type { InputCSSVariables, InputElementBaseProps, InputElementProps } from './input.types';
import type { TamaguiComponent, TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export function createInput<T extends TamaguiComponent>(Element: T) {
  return Element.styleable<GetProps<T>>(
    forwardRef((_props: InputElementProps, forwardedRef: ForwardedRef<TamaguiElement>) => {
      const Component = Element as unknown as TamaguiComponent<InputElementBaseProps>;
      const {
        allowFontScaling,
        selectTextOnFocus,
        showSoftInputOnFocus,
        textContentType,
        passwordRules,
        textBreakStrategy,
        underlineColorAndroid,
        selection,
        lineBreakStrategyIOS,
        returnKeyLabel,
        disabled,
        onSubmitEditing,
        caretHidden,
        clearButtonMode,
        clearTextOnFocus,
        contextMenuHidden,
        dataDetectorTypes,
        id,
        type,
        enablesReturnKeyAutomatically,
        importantForAutofill,
        inlineImageLeft,
        inlineImagePadding,
        inputAccessoryViewID,
        keyboardAppearance,
        cursorColor,
        disableFullscreenUI,
        maxFontSizeMultiplier,
        numberOfLines,
        onContentSizeChange,
        onEndEditing,
        onScroll,
        onSelectionChange,
        caretColor,
        placeholderTextColor,
        blurOnSubmit,
        enterKeyHint,
        returnKeyType,
        rejectResponderTermination,
        scrollEnabled,
        selectionColor,
        inputMode,
        rows,
        minRows,
        maxRows,
        error,
        size = '$500',
        ...props
      } = _props;
      const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const theme = useTheme();

      useEffect(() => {
        if (!id || disabled) return;

        return registerFocusable(id, {
          focusAndSelect: () => {
            ref.current?.focus();
          },
          focus: () => {},
        });
      }, [id, disabled]);

      const cssVariables: InputCSSVariables = {};

      if (placeholderTextColor) {
        cssVariables['--placeholderColor'] =
          theme[placeholderTextColor]?.variable ?? placeholderTextColor;
      }

      if (selectionColor) {
        cssVariables['--selectionColor'] = theme[selectionColor]?.variable ?? selectionColor;
      }

      const inputProps = {
        ...props,
        id,
        disabled,
        caretColor,
        type,
        inputMode,
        enterKeyHint,
        size,
        rows,
        style: {
          ...(props.style as Record<string, unknown>),
          ...cssVariables,
        },
      };

      const [height, setHeight] = useState(0);

      const multiline = Boolean(rows || minRows || maxRows);

      useEffect(() => {
        const el = ref.current as HTMLTextAreaElement;
        if (!el || !multiline) return;

        // Get initial line height
        const computedStyle = window.getComputedStyle(el);
        const initialLineHeight = parseInt(computedStyle.lineHeight, 10) || el.clientHeight;

        const resize = () => {
          if (!el) return;

          // Save current scroll position
          const scrollPos = el.scrollTop;

          // Temporarily reset height to accurately measure scrollHeight
          el.style.height = 'auto';

          const scrollHeight = el.scrollHeight;

          // Add a small padding for comfortable editing
          const paddingHeight = 4; // pixels for padding

          const _minRows = rows || minRows || 1;
          const _maxRows = rows || maxRows || 0;

          // Set height with limits
          const minHeight = _minRows * (initialLineHeight + paddingHeight);
          const maxHeight = _maxRows * (initialLineHeight + paddingHeight);

          const newHeight = Math.max(minHeight, Math.min(scrollHeight + paddingHeight, maxHeight));

          // Set new height
          el.style.height = `${newHeight}px`;
          setHeight(newHeight);

          if (_maxRows) {
            // Enable scroll only if content requires more lines than maxRows
            el.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';

            // Restore scroll position
            el.scrollTop = scrollPos;
          }
        };

        // Initial resize
        resize();

        // Create observer for automatic size change when content changes
        const observer = new ResizeObserver(() => {
          requestAnimationFrame(resize);
        });
        observer.observe(el);

        // Track changes in value to account for line breaks
        const handleInput = () => {
          requestAnimationFrame(resize);
        };

        el.addEventListener('input', handleInput);

        return () => {
          observer.disconnect();
          el.removeEventListener('input', handleInput);
        };
      }, [minRows, maxRows, props.value, multiline, rows]);

      return (
        <>
          {process.env.TAMAGUI_TARGET === 'web' && (
            <style>
              {`
                input::selection, textarea::selection {
                  background-color: var(--selectionColor) !important;
                }
                input::placeholder, textarea::placeholder {
                  color: var(--placeholderColor) !important;
                }
              `}
            </style>
          )}
          <Component
            {...inputProps}
            {...(multiline
              ? {
                  tag: 'textarea',
                  rows,
                  style: {
                    ...(props.style as Record<string, unknown>),
                    ...cssVariables,
                    height: height ? `${height}px` : 'auto',
                    resize: 'none',
                    overflow: 'hidden',
                  },
                }
              : {})}
            ref={composedRefs}
          />
        </>
      );
    }),
    {
      disableTheme: true,
    },
  );
}
