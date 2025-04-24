/* eslint-disable max-lines */
import {
  useComposedRefs,
  useEvent,
  useTheme,
  withStaticProperties,
  type TamaguiElement,
} from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { ScrollView } from '@tamagui/scroll-view';
import { useChildrenArray } from '@xsolla-zk-ui/react/hooks/use-children-array';
import { isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import {
  InputEndSlot,
  InputNewContext,
  InputNewElement,
  InputNewFrame,
  InputStartSlot,
} from './input-new.styled';
import type { InputNewProps } from './input-new.types';
import type { ScrollViewProps } from '@tamagui/scroll-view';
import type { ForwardedRef, ReactElement, ReactNode } from 'react';

type CSSVariables = Record<string, string>;

const InputNewComponent = InputNewElement.styleable<InputNewProps>(
  (
    {
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
      ...props
    },
    forwardedRef: ForwardedRef<TamaguiElement>,
  ) => {
    const childrenArray = useChildrenArray(children);
    const [focused, setFocused] = useState(false);
    const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const theme = useTheme();

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

    const cssVariables: CSSVariables = {};

    if (placeholderTextColor) {
      cssVariables['--placeholderColor'] =
        placeholderTextColor ?? theme[placeholderTextColor]?.variable;
    }

    if (selectionColor) {
      cssVariables['--selectionColor'] = selectionColor ?? theme[selectionColor]?.variable;
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

    const multiline = props.tag === 'textarea' || Boolean(rows || minRows || maxRows);

    useEffect(() => {
      const el = ref.current as HTMLTextAreaElement;
      if (!el && !multiline) return;

      // Получение начальной высоты одной строки
      const computedStyle = window.getComputedStyle(el);
      const initialLineHeight = parseInt(computedStyle.lineHeight, 10) || el.clientHeight;

      // Функция для подсчета строк в тексте с учетом переносов строк
      const countLines = (text: string): number => {
        if (!text) return 1;
        // Считаем явные переносы строк
        return text.split('\n').length;
      };

      const resize = () => {
        if (!el) return;

        // Сохраним текущую позицию прокрутки
        const scrollPos = el.scrollTop;

        // Временно сбрасываем высоту для точного измерения scrollHeight
        el.style.height = 'auto';

        const scrollHeight = el.scrollHeight;
        const currentText = el.value;

        const linesCount = countLines(currentText);

        // Добавляем небольшой отступ для комфортного редактирования
        const paddingHeight = 2; // пиксели для отступа

        const _minRows = rows || minRows || 1;
        const _maxRows = rows || maxRows || 0;

        // Устанавливаем высоту с учетом ограничений
        const minHeight = _minRows * (initialLineHeight + paddingHeight);
        const maxHeight = _maxRows * (initialLineHeight + paddingHeight);

        const newHeight = Math.max(minHeight, Math.min(scrollHeight + paddingHeight, maxHeight));

        console.log({
          newHeight,
          scrollHeight,
          maxHeight,
          currentLines: newHeight / initialLineHeight,
        });

        // Устанавливаем новую высоту
        el.style.height = `${newHeight}px`;
        setHeight(newHeight);

        if (_maxRows) {
          // Включаем скролл только если контент требует больше строк, чем maxRows
          el.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';

          // Восстанавливаем позицию прокрутки
          el.scrollTop = scrollPos;
        }
      };

      // Начальный resize
      resize();

      // Создаем observer для автоматического изменения размера при изменении контента
      const observer = new ResizeObserver(() => {
        requestAnimationFrame(resize);
      });
      observer.observe(el);

      // Отслеживаем изменения значения для учета переносов строк
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
          <InputNewElement
            onFocus={(e) => {
              handleFocus();
              onFocus?.(e);
            }}
            onBlur={(e) => {
              handleBlur();
              onBlur?.(e);
            }}
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
          {endAdornment}
        </InputNewFrame>
      </>
    );
  },
  {
    disableTheme: true,
  },
);

type WithScrollProps = ScrollViewProps & {
  hasScroll?: boolean;
  children: ReactNode;
};

function ScrollWrapper({ children, hasScroll = false, ...props }: WithScrollProps) {
  if (!hasScroll) return <>{children}</>;
  return <ScrollView {...props}>{children}</ScrollView>;
}

export const InputNew = withStaticProperties(InputNewComponent, {
  Props: InputNewContext.Provider,
  StartAdornment: InputStartSlot,
  EndAdornment: InputEndSlot,
});
