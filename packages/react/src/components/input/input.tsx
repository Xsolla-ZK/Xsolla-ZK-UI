import { useComposedRefs, useTheme, withStaticProperties } from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { useChildrenArray } from '@xsolla-zk/react/hooks/use-children-array';
import { forwardRef, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import {
  InputContext,
  InputElement,
  InputEndSlot,
  InputFrame,
  InputStartSlot,
} from './input.styled';
import type { InputProps } from './input.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, ReactElement } from 'react';

type CSSVariables = Record<string, string>;

const InputComponent = InputElement.styleable<InputProps>(
  forwardRef((_props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const {
      size = '$500',
      children,
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
      onFocus,
      onBlur,
      error,
      frameStyles,
      ...props
    } = _props;
    const childrenArray = useChildrenArray(children);
    const [focused, setFocused] = useState(false);
    const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const theme = useTheme();
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

    const cssVariables: CSSVariables = {};

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

        // console.log({
        //   newHeight,
        //   scrollHeight,
        //   maxHeight,
        //   currentLines: newHeight / initialLineHeight,
        // });

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
        <InputFrame
          size={size}
          focused={!inputProps.readOnly ? focused : false}
          disabled={disabled}
          theme={inputProps.readOnly ? 'readonly' : error ? 'error' : undefined}
          isTextarea={inputProps.tag === 'textarea'}
          onPressIn={() => {
            isInteractingWithFrame.current = true;
          }}
          onPressOut={() => {
            isInteractingWithFrame.current = false;
          }}
          onPress={() => {
            if (inputProps.readOnly) return;
            ref.current?.focus();
          }}
          {...frameStyles}
        >
          {startSlot}
          <InputElement
            {...(!inputProps.readOnly
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
          {endSlot}
        </InputFrame>
      </>
    );
  }),
  {
    disableTheme: true,
  },
);

export const Input = withStaticProperties(InputComponent, {
  Props: InputContext.Provider,
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
